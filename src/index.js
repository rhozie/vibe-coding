import 'dotenv/config';
import { Elysia } from 'elysia';
import { userRoutes } from './routes/user.js';
import { usersRoutes } from './routes/users-routes.js';

const PORT = process.env.PORT || 3000;

const app = new Elysia()
  .get('/', () => ({ message: 'API is running 🦊' }))
  .use(userRoutes)
  .use(usersRoutes)
  .listen(PORT);

console.log(`🦊 Elysia is running at http://localhost:${PORT}`);
