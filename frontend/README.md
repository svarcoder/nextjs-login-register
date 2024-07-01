# Next.js Frontend with TypeScript, Tailwind CSS, and Protected Routes

This is a Next.js frontend application built with TypeScript and Tailwind CSS. The application features user authentication, role-based authorization, and protected routes, interacting with an Express.js backend.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)

## Features

- User Registration
- User Login
- Protected Routes
- Role-based Authorization (User/Admin)
- Tailwind CSS for styling
- Context API for state management

## Getting Started

### Prerequisites

- Node.js (version 14.x or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/svarcoder/nextjs-login-register.git
   cd frontend
   ```

2.Install dependencies:

```sh
npm install
# or
yarn install
```

3. Create a .env.local file in the root directory and add the following environment variables:

```sh
NEXT_PUBLIC_BASE_URL=http://localhost:5005
```

4. Start the development server:

```sh
   npm run dev
   # or
   yarn dev
```

### Project Structure

```sh
├── components
│ ├── NavBar.tsx # Navigation bar component
│ ├── ProtectedRoute.tsx # Component to protect routes
├── context
│ └── AuthContext.tsx # Context API for authentication
├── pages
│ ├── admin.tsx # Admin page
│ ├── dashboard.tsx # Dashboard page (protected)
│ ├── index.tsx # Home page
│ ├── login.tsx # Login page
│ ├── profile.tsx # Profile page (protected)
│ └── register.tsx # Registration page
├── public # Static files
├── styles
│ └── globals.css # Global styles
├── .env # Environment variables
├── README.md # Project documentation
└── tsconfig.json # TypeScript configuration
```

### Scripts

dev: Runs the development server.
build: Builds the application for production.
start: Starts the production server.
lint: Runs ESLint to lint the codebase.

### Environment Variables

NEXT_PUBLIC_BASE_URL: The base URL of the Express.js backend API.
