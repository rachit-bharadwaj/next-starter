#!/usr/bin/env node
const { execSync } = require("child_process");
const { join } = require("path");

const projectName = process.argv[2] || "my-next-app";
const projectPath = join(process.cwd(), projectName);

try {
  // Clone the starter template repository
  execSync(
    `git clone --depth=1 https://github.com/rachit-bharadwaj/next-starter.git ${projectPath}`,
    { stdio: "inherit" }
  );

  // Change into the new project directory
  process.chdir(projectPath);

  // Remove the existing .git folder
  execSync("rm -rf .git", { stdio: "inherit" });

  // Update all packages to the latest stable versions
  execSync("npm install -g npm-check-updates", { stdio: "inherit" }); // Install npm-check-updates globally
  execSync("ncu -u", { stdio: "inherit" }); // Use ncu to update package.json with latest versions
  execSync("npm install", { stdio: "inherit" }); // Install updated packages

  console.log(
    `\nYour Next.js starter app is ready! cd into ${projectName} and start coding!\n`
  );
} catch (error) {
  console.error("An error occurred:", error.message);
  process.exit(1);
}
