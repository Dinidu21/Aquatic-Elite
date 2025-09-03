# Aquatic Elite 
<img width="1908" height="900" alt="image" src="https://github.com/user-attachments/assets/fffe85b3-d82e-4952-81c8-e93012555585" />


[![Netlify Status](https://api.netlify.com/api/v1/badges/136edaba-a513-4187-98a0-3df03d96d77e/deploy-status)](https://app.netlify.com/projects/aquatic-elite/deploys)

**Transforming Swimmers into Champions of Tomorrow**

Aquatic Elite is a professional web application designed to showcase elite swimming coaching services. Built with Next.js, TypeScript, and Tailwind CSS, it provides a modern, responsive platform to highlight coaching programs, athlete achievements, testimonials, and more. The application emphasizes cutting-edge training techniques, personalized programs, and a proven track record of developing world-class athletes.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design**: Fully responsive UI optimized for desktop, tablet, and mobile devices.
- **Dynamic Content**: Showcases achievements, testimonials, coaching programs, and coach profiles with dynamic data rendering.
- **Interactive Components**: Includes carousels, filters, and search functionality for an engaging user experience.
- **Type-Safe Development**: Built with TypeScript for robust type checking and improved maintainability.
- **SEO Optimization**: Leverages Next.js server-side rendering (SSR) and static site generation (SSG) for better search engine visibility.
- **Modern Styling**: Uses Tailwind CSS for consistent, customizable, and maintainable styling.
- **Accessibility**: Designed with accessibility best practices to ensure inclusivity.
- **Achievements Showcase**: Highlights athlete successes with filters for local, national, and international categories.
- **Testimonials Spotlight**: Displays parent and student testimonials with star ratings and featured quotes.
- **Program Details**: Provides detailed information on coaching programs, including pricing, schedules, and prerequisites.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v15.3.4) - React framework for server-side rendering and static site generation.
- **Language**: [TypeScript](https://www.typescriptlang.org/) - For type-safe JavaScript development.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid and consistent styling.
- **Icons**: [Lucide React](https://lucide.dev/) - Lightweight and customizable icon library.
- **Animation**: [Framer Motion](https://www.framer.com/motion/) - For smooth and interactive animations.
- **Deployment**: [Netlify](https://www.netlify.com/) - For hosting and continuous deployment.
- **Linting & Formatting**: [ESLint](https://eslint.org/) with TypeScript rules, [Prettier](https://prettier.io/) for code formatting.
- **Build Tool**: [npm](https://www.npmjs.com/) - Package manager for dependency management and scripts.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (v9 or later)
- [Git](https://git-scm.com/) for version control
- A code editor like [VS Code](https://code.visualstudio.com/) (recommended)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/aquatic-elite.git
   cd aquatic-elite
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

   This installs all required packages, including Next.js, TypeScript, Tailwind CSS, and other dependencies listed in `package.json`.

## Running the Application

1. **Development Mode**:
   Start the development server with hot reloading:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

2. **Linting**:
   Run ESLint to check for code quality and TypeScript issues:
   ```bash
   npm run lint
   ```

3. **Formatting**:
   Format the codebase using Prettier:
   ```bash
   npm run format
   ```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This generates a `.next` folder with optimized assets. The build process includes TypeScript type checking and ESLint validation.

To preview the production build locally:

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the production build.

## Deployment

The application is deployed on [Netlify](https://www.netlify.com/) for continuous deployment. Follow these steps to deploy:

1. **Connect to Netlify**:
   - Link your repository to Netlify via the Netlify dashboard.
   - Set the build command to `npm run build` and the publish directory to `.next`.

2. **Environment Variables**:
   - Configure any necessary environment variables in `next.config.js` or Netlify's environment settings (e.g., API keys, if applicable).

3. **Deploy**:
   - Push changes to your repository’s `main` branch to trigger an automatic deployment.
   - Monitor the deployment status using the Netlify badge:  
     [![Netlify Status](https://api.netlify.com/api/v1/badges/136edaba-a513-4187-98a0-3df03d96d77e/deploy-status)](https://app.netlify.com/projects/aquatic-elite/deploys)

## Project Structure

```plaintext
aquatic-elite/
├── components/              # Reusable React components
│   └── sections/           # Page-specific components (e.g., AchievementsCarousel, HeroSection)
├── lib/                    # Type definitions and data
│   ├── data.ts             # Sample data for achievements, testimonials, programs, etc.
│   └── types.ts            # TypeScript interfaces
├── src/                    # Source code
│   └── app/                # Next.js app directory (pages and layouts)
├── public/                 # Static assets (images, fonts, etc.)
├── styles/                 # Global CSS and Tailwind configuration
├── .eslintrc.json          # ESLint configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Contributing

We welcome contributions to improve Aquatic Elite! To contribute:

1. **Fork the Repository**:
   - Fork the project on GitHub and clone your fork locally.

2. **Create a Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**:
   - Follow the coding style and conventions (use ESLint and Prettier).
   - Ensure TypeScript types are correctly defined.
   - Write clear, concise commit messages.

4. **Test Changes**:
   - Run `npm run lint` and `npm run build` to ensure no errors.
   - Test the application locally with `npm run dev`.

5. **Submit a Pull Request**:
   - Push your branch to your fork and create a pull request against the `main` branch.
   - Include a detailed description of your changes and any relevant issue numbers.

6. **Code Review**:
   - All contributions are subject to review. Ensure your code adheres to ESLint rules and project standards.

## License

This project is licensed under the [MIT License](LICENSE). See the `LICENSE` file for details.

## Contact

For questions, feedback, or support, reach out to:

- **Email**: coach@aquaticelite.com
- **Social Media**:
  - [Instagram](https://instagram.com/aquaticelite)
  - [Facebook](https://facebook.com/aquaticelite)
  - [Twitter](https://twitter.com/aquaticelite)
  - [YouTube](https://youtube.com/aquaticelite)
  - [TikTok](https://tiktok.com/@aquaticelite)

---

*Built with 🏊‍♂️ by the Aquatic Elite team.*
