# ERP System Backend

This is the backend server for the ERP system, built with Node.js, Express, TypeScript, and Prisma.

## Prerequisites

- Node.js (v18 or later)
- PostgreSQL
- npm or yarn

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the environment variables example file:
   ```bash
   cp .env.example .env
   ```

3. Update the `.env` file with your configuration:
   - Set your database connection string
   - Set your JWT secret
   - Configure other environment variables as needed

4. Generate Prisma client:
   ```bash
   npm run prisma:generate
   ```

5. Run database migrations:
   ```bash
   npm run prisma:migrate
   ```

## Development

Start the development server:
```bash
npm run dev
```

The server will start on port 3000 (or the port specified in your .env file).

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project
- `npm start` - Start the production server
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:studio` - Open Prisma Studio
- `npm test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## API Endpoints

### Authentication
- POST `/api/auth/login` - User login
- POST `/api/auth/register` - User registration
- POST `/api/auth/logout` - User logout
- GET `/api/auth/me` - Get current user
- PUT `/api/auth/change-password` - Change password

More endpoints will be added for:
- Items management
- Clients management
- Suppliers management
- Purchases management
- Sales management
- Expenses management
- Cash management
- Stock management

## Database Schema

The database includes the following models:
- User
- Item
- Client
- Supplier
- Purchase
- Sale
- Expense
- Cash
- Stock

For detailed schema information, check the `prisma/schema.prisma` file.