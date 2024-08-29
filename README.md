# Mini Order Status Tracker

## Objective

Minimal Order fect API PoC.


## Tech Stack Used

- **Backend**: Express.js, Prisma, PostgreSQL, eslint, mocha and chai
- **Frontend**: Next.js, React, Tailwind CSS, shadcn components, shadcdn datatable built on top of Tanstack table
- **Database**: PostgresDB with supabase

## Features

- **Backend**:
  - API Endpoint: `GET api/orders` to fetch a list of orders from a PostgreSQL database using Prisma.
  - Paginated queries `GET api/orders?page=1&size=2` to handle large datasets efficiently.
  - **Database trigger** for order reference generation.
  - Organized into routes, controllers and services.
  - Configured **ESLint** for code quality.
  - Tests written using *Mocha*.

- **Frontend**:
  - Displays a list of orders in a *Datatable* built with TanStack Table
  - Built with Next.js for server-side rendering (SSR) and routing.
  - Uses **Tailwind** CSS for styling.
  - Integrates shadcn components for UI enhancements.
  - Prefetching data with SSR and supports URL-based refresh.
  - Ability to search through data.

## Installation

### Prerequisites

- Node.js
- PostgreSQL
- Prisma CLI

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo

2. Install the packages:
   ```bash
   npm install

3. Set Up your env. I have db env variables since it is a requirement of supabase.
   ```bash
    PORT=4000
    
    DATABASE_URL=postgresql://[user]:[password]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres?pgbouncer=true

    DIRECT_URL=postgresql://[user]:[password]@aws-0-eu-central-1.pooler.supabase.com:5432/postgres

4. Generate. Will work a new or my current database.
   ```bash
   npx prisma migrate dev

5. Generate. Will work a new or my current database.
   ```bash
   npx prisma migrate dev


6. Seed data. My db is already seeded with 10K records. Feel free to add.Will work on any db
   
      ```bash
   npm run seed


7. run in dev or build mode
   
      ```bash
   npm run dev
   npm run start


8. Testing and liniting
   
      ```bash
   npm run test
   npm run lint



### Frontend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo

2. Install the packages:
   ```bash
   npm install

3. Set Up your env.local I have db env variables since it is a requirement of supabase.
   ```bash
    API_URL=http://127.0.0.1:4000


4. run in dev
   
      ```bash
   npm run dev


