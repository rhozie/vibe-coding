# vibe-coding API

Backend REST API menggunakan **ElysiaJS**, **Drizzle ORM**, dan **MySQL**.

## Tech Stack

- **Runtime**: Bun
- **Framework**: ElysiaJS
- **ORM**: Drizzle ORM
- **Database**: MySQL

## Setup

### 1. Copy environment variables
```bash
cp .env.example .env
```
Lalu edit `.env` dan isi `DATABASE_URL` dengan koneksi MySQL kamu.

### 2. Install dependencies
```bash
bun install
```

### 3. Setup database
```bash
# Push schema ke database (development)
bun run db:push

# Atau generate + jalankan migration
bun run db:generate
bun run db:migrate
```

### 4. Jalankan server
```bash
bun run dev
```

Server akan berjalan di `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint      | Deskripsi          |
|--------|---------------|--------------------|
| GET    | /             | Health check       |
| GET    | /users        | Ambil semua users  |
| GET    | /users/:id    | Ambil user by ID   |
| POST   | /users        | Buat user baru     |
| PUT    | /users/:id    | Update user        |
| DELETE | /users/:id    | Hapus user         |

### Contoh Request Body (POST/PUT /users)
```json
{
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

## Scripts

| Script            | Perintah                  |
|-------------------|---------------------------|
| `bun run dev`     | Jalankan dengan hot reload |
| `bun run start`   | Jalankan production        |
| `bun run db:push` | Push schema ke DB          |
| `bun run db:generate` | Generate migration     |
| `bun run db:migrate`  | Jalankan migration     |
| `bun run db:studio`   | Buka Drizzle Studio    |
