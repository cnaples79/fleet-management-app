# Fleet Management App

This is a **Fleet Management Web Application** built using **Next.js**, **TypeScript**, and **Prisma**. The app allows users to manage vehicles, track their locations, and provides additional fleet management capabilities.

## Features

- **Vehicle Management**: Add, remove, and update vehicle details.
- **Vehicle Tracking**: Display vehicle locations on a map.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Database Integration**: Powered by SQLite and Prisma.
- **Customizable Theme**: Styled with Tailwind CSS.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: TypeScript
- **Database**: SQLite with [Prisma](https://www.prisma.io/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Maps API**: Google Maps API
- **Hosting**: Deployable to [Vercel](https://vercel.com/)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- SQLite installed locally or accessible.

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd fleet-management-app-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the environment variables:
   - Copy `.env.local.example` to `.env.local` and configure the variables.

4. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Directory Structure

- **`components`**: Contains reusable React components.
- **`pages`**: Includes the main Next.js routes for the application.
- **`prisma`**: Database schema and migrations.
- **`styles`**: CSS and Tailwind styling.
- **`lib`**: Utility functions and library integrations.
- **`types`**: TypeScript type definitions.

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Run the production server.
- `npm run lint`: Lint the codebase.
- `npm run format`: Format the code using Prettier.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes and push them to your fork.
4. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Support

If you encounter any issues, feel free to open an issue on the repository or contact the maintainer.

---

Developed with ❤️ from Charlotte.
