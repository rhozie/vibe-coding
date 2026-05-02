import { Elysia } from 'elysia';
import { db } from '../db/index.js';
import { users } from '../db/schema.js';
import { eq } from 'drizzle-orm';

export const userRoutes = new Elysia({ prefix: '/users' })

  // GET /users — ambil semua users
  .get('/', async () => {
    const result = await db.select().from(users);
    return result;
  })

  // GET /users/:id — ambil user by id
  .get('/:id', async ({ params, error }) => {
    const result = await db.select().from(users).where(eq(users.id, Number(params.id)));
    if (result.length === 0) return error(404, { message: 'User not found' });
    return result[0];
  })

  // POST /users — buat user baru
  .post('/', async ({ body, error }) => {
    const { name, email } = body;
    if (!name || !email) return error(400, { message: 'name and email are required' });

    await db.insert(users).values({ name, email });
    return { message: 'User created successfully' };
  })

  // PUT /users/:id — update user
  .put('/:id', async ({ params, body, error }) => {
    const { name, email } = body;
    const existing = await db.select().from(users).where(eq(users.id, Number(params.id)));
    if (existing.length === 0) return error(404, { message: 'User not found' });

    await db.update(users).set({ name, email }).where(eq(users.id, Number(params.id)));
    return { message: 'User updated successfully' };
  })

  // DELETE /users/:id — hapus user
  .delete('/:id', async ({ params, error }) => {
    const existing = await db.select().from(users).where(eq(users.id, Number(params.id)));
    if (existing.length === 0) return error(404, { message: 'User not found' });

    await db.delete(users).where(eq(users.id, Number(params.id)));
    return { message: 'User deleted successfully' };
  });
