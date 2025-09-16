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
    git clone [https://github.com/mcqeems/recapify.git](https://github.com/mcqeems/recapify.git)
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
