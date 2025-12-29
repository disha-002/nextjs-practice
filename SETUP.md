# Next.js Authentication Project Setup Guide

## ✅ Completed Steps

1. **Dependencies Installed** - All npm packages are installed
2. **Prisma Client Generated** - Generated to `app/generated/prisma`
3. **Environment Files Created**:
   - `.env.local` - Your local environment variables
   - `.env.example` - Template for other developers

## 🔄 Next Steps Required

### 1. **Database Setup**
You need a PostgreSQL database. Choose one:

**Option A: Local PostgreSQL**
- Install PostgreSQL from https://www.postgresql.org/download/
- Create a new database: `nextjs_practice`
- Update `DATABASE_URL` in `.env.local`:
  ```
  DATABASE_URL="postgresql://username:password@localhost:5432/nextjs_practice"
  ```

**Option B: PostgreSQL on Docker**
```bash
docker run --name postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=nextjs_practice -p 5432:5432 -d postgres
```

**Option C: Cloud Database**
- Use services like:
  - Neon (https://neon.tech)
  - Supabase (https://supabase.com)
  - Railway (https://railway.app)
- Copy the connection string to `.env.local`

### 2. **Run Database Migrations**
Once your database is ready:
```bash
npx prisma migrate deploy
```

This will create the `User` table in your database.

### 3. **Start Development Server**
```bash
npm run dev
```
The app will be available at `http://localhost:3000`

## 📁 Project Structure

```
app/
├── api/v1/signup/route.ts    - POST endpoint for user signup
├── signin/page.tsx            - Sign in page
├── signup/page.tsx            - Sign up page
├── layout.tsx                 - Root layout
└── page.tsx                   - Home page
prisma/
├── schema.prisma             - Database schema (User model)
└── migrations/               - Database migrations
```

## 🔐 Current Database Schema

```prisma
model User {
  id       Int @default(autoincrement()) @id
  username String
  password String
}
```

⚠️ **Security Note**: Passwords should be hashed before storing. Consider adding `bcrypt` for password hashing.

## 📚 Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma studio` - Open Prisma visual database explorer
- `npx prisma migrate dev` - Create and run migrations

## 🚀 Technologies Used

- **Framework**: Next.js 16.1.1
- **Database**: PostgreSQL with Prisma ORM
- **Frontend**: React 19.2.3 with TypeScript
- **Styling**: Tailwind CSS 4
- **HTTP Client**: Axios
- **Linting**: ESLint
