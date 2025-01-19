# @rachitbharadwaj/create-next-app

A CLI tool to create a fully customized Next.js application quickly and easily. This package sets up a Next.js project preconfigured with Tailwind CSS, Shadcn, TypeScript, and custom folder structures, saving you time and effort.

## Opensource Project

Visit the **[GitHub Repository](https://github.com/rachit-bharadwaj/next-starter)** to access the source code, report issues, or contribute:



If you find this project useful, please ⭐️ star the repository:
[![GitHub stars](https://img.shields.io/github/stars/rachit-bharadwaj/next-starter.svg?style=social&label=Star)](https://github.com/rachit-bharadwaj/next-starter)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Customization](#customization)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Installation

You don’t need to install this tool globally! Use it directly via `npx`:

```bash
npx @rachitbharadwaj/create-next-app <project-name>
```

Replace `<project-name>` with the desired name for your new application. If no name is provided, it defaults to `my-next-app`.

---

## Usage

After running the command, follow these steps:

1. Navigate to your new project directory:

   ```bash
   cd <project-name>
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open your browser and visit:
   ```
   http://localhost:3000
   ```

Enjoy your ready-to-go Next.js app! 🚀

---

## Features

- **Next.js Framework**: The latest stable version with best practices.
- **TypeScript Support**: Preconfigured for type-safe development.
- **Tailwind CSS Integration**: Styled out of the box with Tailwind CSS.
- **Shadcn Integration**: Preinstalled Shadcn components with Zinc color and CSS variables enabled.
- **Custom Folder Structure**: Organized to fit modern development workflows.
- **Removed `.git` folder**: Allows you to initialize your own Git repository.

---

## Customization

### Predefined Configurations:

1. **Tailwind CSS**:

   - Fully customized `tailwind.config.ts` for extended screen sizes, colors, and plugins like `tailwindcss-animate`.

2. **Shadcn Setup**:

   - Default styles with Zinc as the base color.
   - CSS variables for theming pre-enabled.

3. **Custom Folder Structure**:

   - Adds a `(main)` folder inside the `app` directory with:
     - `layout.tsx`: Default layout for your pages.
     - `page.tsx`: Starter page with placeholder content.

4. **Global Metadata**:
   - Configures `Outfit` font with preloaded subsets and weights. You can customize your font preferences in the `layout.tsx` file.
   - Sets up a basic metadata template for SEO.

---

## Project Structure

Your new Next.js application will have the following structure:

```plaintext
<project-name>
├── .next/                  # Next.js build files
├── app/                    # Application folder
│   ├── (main)/             # Main folder for your primary layout and pages
│   │   ├── layout.tsx      # Main layout component
│   │   └── page.tsx        # Default page component
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout with metadata and global font
├── components/             # Shared components
├── constants/              # Application constants
├── containers/             # Page-specific components
├── contexts/               # React contexts
├── lib/                    # Utility functions or libraries
├── node_modules/           # Node dependencies
├── partials/               # Partial UI components
├── public/                 # Public assets
├── types/                  # TypeScript types
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Files to ignore in Git
├── next-env.d.ts           # Next.js TypeScript configuration
├── next.config.ts          # Next.js configuration file
├── package-lock.json       # Lockfile for dependencies
├── package.json            # Project metadata and scripts
├── postcss.config.mjs      # PostCSS configuration
├── README.md               # Documentation for the project
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b my-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add my feature'
   ```
4. Push your changes to the branch:
   ```bash
   git push origin my-feature
   ```
5. Open a pull request for review.

We value your contributions! 🛠️

---

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

For any issues or feature requests, please open an issue or contact me at [rachit.infornics.com/contact](https://rachit.infornics.com/contact).

---

## Notes

- If the `create-next-app` setup fails, ensure you have the latest version of Node.js installed.
- Run `npm install` to ensure all dependencies are installed correctly.

Happy coding! 🚀
