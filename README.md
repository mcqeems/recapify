# Recapify

![Recapify Logo](https://raw.githubusercontent.com/mcqeems/recapify/main/public/logo-white-bg.png)

An open-source invoices recapitulation system.

## Introduction

Recapify is a web application built with Next.js that allows users to manage invoices and customers. It provides a dashboard to view recent revenue, latest invoices, and cards with important data like total paid invoices, total pending invoices, number of invoices, and number of customers.

## Features

- **Dashboard**: An overview of your business with key metrics.
- **Invoices**: View, create, edit, and delete invoices.
- **Customers**: Manage your customers' information.
- **Authentication**: Secure login system for users.
- **Database**: Uses Postgres for data storage.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20.9.0 or higher)
- [pnpm](https://pnpm.io/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/mcqeems/recapify.git
    cd recapify
    ```

2.  Install the dependencies:

    ```bash
    pnpm install
    ```

### Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```env
POSTGRES_URL="<your_postgres_url>"
AUTH_SECRET="<your_auth_secret>"
```

- `POSTGRES_URL`: The connection string for your PostgreSQL database.
- `AUTH_SECRET`: A secret key for NextAuth.js. You can generate one with the following command:

```bash
openssl rand -base64 32
```

### Database Setup

To set up the database, you need to seed it with initial data. To do this, navigate to `/seed` in your browser. This will create the necessary tables (`users`, `customers`, `invoices`, `revenue`) and populate them with dummy data. After seeding the database, you can query the tables by navigating to `/query`.

### Running the Development Server

Once you have set up the environment variables and the database, you can start the development server:

```bash
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.

## Available Scripts

In the project directory, you can run:

- `pnpm dev`: Runs the app in development mode with Turbopack.
- `pnpm build`: Builds the app for production.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs the linter.

## Project Structure

The project follows the Next.js App Router structure. Here is a brief overview of the key directories:

- `app/`: Contains the application's routes and UI components.
  - `app/dashboard/`: The main dashboard layout and pages for invoices and customers.
  - `app/lib/`: Contains utility functions, data fetching logic, and server actions.
  - `app/ui/`: Contains the UI components for the application.
- `auth.config.ts` & `auth.ts`: Configuration for NextAuth.js.
- `middleware.ts`: Handles authentication and redirects.
- `public/`: Contains static assets like images and fonts.
- `scripts/`: Contains scripts for seeding the database.

## Deployment

This project can be deployed on any platform that supports Next.js, such as Vercel or Netlify.

### Deploying on Vercel

The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out the Next.js deployment documentation for more details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or suggestions.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
