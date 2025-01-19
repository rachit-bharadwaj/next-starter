#!/usr/bin/env node

import { execSync } from "child_process";
import { existsSync, mkdirSync, writeFileSync, rmSync } from "fs";
import path from "path";
import inquirer from "inquirer";

async function main() {
  // Step 1: Prompt for project name
  let projectName = process.argv[2];
  if (!projectName) {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "Enter your project name:",
        default: "my-next-app",
      },
    ]);
    projectName = answers.projectName;
  }

  const projectPath = path.join(process.cwd(), projectName);

  if (existsSync(projectPath)) {
    console.error(`Error: Directory "${projectName}" already exists.`);
    process.exit(1);
  }

  try {
    // Step 2: Create Next.js App
    console.log(`Creating a new Next.js app in ${projectPath}...`);
    execSync(
      `npx create-next-app@latest ${projectPath} --ts --eslint --tailwind --app --use-turbopack --src-dir=false --import-alias=@/* --yes`,
      { stdio: "inherit" }
    );

    // Step 2.1: Remove .git folder created by create-next-app
    console.log("Removing .git folder...");
    rmSync(path.join(projectPath, ".git"), { recursive: true, force: true });
    console.log(".git folder removed successfully! You can initiate your git fromm scratch now.");

    // Step 3: Change to project directory
    process.chdir(projectPath);

    // Step 4: Set up shadcn
    console.log("Setting up shadcn...");
    execSync(`npx shadcn@latest init`, { stdio: "inherit" });
    execSync(`echo "Default\nZinc\nyes" | npx shadcn@latest init`, {
      stdio: "inherit",
    });

    // Step 5: Update Tailwind configuration
    console.log("Updating Tailwind configuration...");
    const tailwindConfig = `
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./partials/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "20rem",
        sm: "40rem",
        md: "48rem",
        lg: "64rem",
        xl: "80rem",
        "2xl": "96rem",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
export default config;
    `;
    writeFileSync(
      path.join(projectPath, "tailwind.config.ts"),
      tailwindConfig,
      "utf8"
    );

    // Step 6: Update app directory structure and content
    console.log("Updating app directory structure...");
    const appDir = path.join(projectPath, "app");
    const mainDir = path.join(appDir, "(main)");
    mkdirSync(mainDir);

    writeFileSync(
      path.join(mainDir, "layout.tsx"),
      `import { ReactNode } from "react";

export default function MainLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}`
    );

    writeFileSync(
      path.join(mainDir, "page.tsx"),
      `export default function Home() {
  return <div>Start your code here...</div>;
}`
    );

    // Update layout.tsx
    writeFileSync(
      path.join(appDir, "layout.tsx"),
      `import { ReactNode } from "react";
import type { Metadata } from "next";

import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Next.js Starter",
    template: "%s | Next.js Starter",
  },
  description: "This is a Next.js starter template created by Rachit Bharadwaj.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={\`\${outfit.className}\`}>{children}</body>
    </html>
  );
}`
    );

    // Delete unwanted files
    rmSync(path.join(appDir, "page.tsx"));
    rmSync(path.join(appDir, "favicon.ico"));

    // Step 7: Update README.md
    console.log("Updating README.md...");
    const readmeContent = `
# ${projectName}

This project was created using \`@rachitbharadwaj/create-next-app\`. It includes:
- Next.js with TypeScript and Tailwind CSS
- shadcn preconfigured
- Custom project structure and starter components

## Getting Started

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

2. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

Visit http://localhost:3000 to view your project.

Happy coding!
    `;
    writeFileSync(path.join(projectPath, "README.md"), readmeContent, "utf8");

    console.log(`\nProject "${projectName}" setup is complete!`);
    console.log(`\nNext steps:\n  cd ${projectName}\n  npm run dev`);
  } catch (error) {
    console.error("An error occurred during setup:", error.message);
    process.exit(1);
  }
}

main();
