# @rachitbharadwaj/create-next-app

Create a new Next.js application quickly and easily with this CLI tool. This package provides a starter template for Next.js projects, enabling developers to get started without the hassle of manual setup.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Installation

To create a new Next.js app using this CLI tool, you can use `npx`:

```bash
npx @rachitbharadwaj/create-next-app <project-name>
```

Replace <project-name> with the desired name for your new application. If no name is provided, it defaults to my-next-app.

## Usage

After running the command above, navigate into your new project directory:

```bash
cd <project-name>
```

Then, you can start the development server:

```bash
npm run dev
```

Open your browser and visit http://localhost:3000 to see your new Next.js app in action!

## Features

- Quickly create a new Next.js application with the latest stable packages.
- Preconfigured with Tailwind CSS for styling.
- Support for TypeScript and other essential libraries.
- Optimized for best practices in Next.js development.

## Project Structure

Your new Next.js application will have the following folder structure, you can for sure modify it according to your needs:

```typescript
<project-name>
├── .next/
├── app/
│   ├── (main)/
│   ├── ├── layout.tsx
│   ├── ├── page.tsx
│   ├── globals.css
│   ├── layout.tsx
├── components/
├── constants/
├── containers/
├── contexts/
├── lib/
├── node_modules/
├── partials/
├── public/
├── types/
├── .eslintrc.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch: git checkout -b my-feature.
- Make your changes and commit them: git commit -m 'Add my feature'.
- Push to the branch: git push origin my-feature.
- Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

For any issues or feature requests, please open an issue on the GitHub repository or contact me at [rachit.infornics.com/contact](https://rachit.infornics.com/contact).

Happy coding! 🚀
