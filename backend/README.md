# Express Auth

## Setup

1. Clone the repository
2. Run `yarn` to install dependencies
3. Create a `.env` file in the root directory and add your environment variables (see `.env.example`)
4. Run `node server.js` to start the development server

## Environment Variables

- `PORT`: Port number (default is 5005)
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT

## API Endpoints

### User Registration

- **POST** `/api/auth/register`
- Request body: `{ "username": "user1", "email": "user1@example.com", "password": "password", "role": "user" }`

### User Login

- **POST** `/api/auth/login`
- Request body: `{ "email": "user1@example.com", "password": "password" }`

### User Logout

- **POST** `/api/auth/logout`

### Get Profile

- **GET** `/api/users/profile`
- Headers: `{ "Authorization": "Bearer <token>" }`

### Admin Access

- **GET** `/api/users/admin`
- Headers: `{ "Authorization": "Bearer <token>" }`

### Home Route

- **GET** `/`

## Middleware

- `auth`: Protect routes to ensure user is authenticated
- `admin`: Ensure user has admin role for specific routes
