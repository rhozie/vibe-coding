import 'dotenv/config';
import { Elysia } from 'elysia';
import { userRoutes } from './routes/user.js';

const PORT = process.env.PORT || 3000;

const app = new Elysia()
  .get('/', () => ({ message: 'API is running 🦊' }))
  .use(userRoutes)
  .listen(PORT);

console.log(`🦊 Elysia is running at http://localhost:${PORT}`);
