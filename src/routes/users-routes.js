import { Elysia, t } from 'elysia';
import { registerUser, loginUser } from '../services/users-service.js';

export const usersRoutes = new Elysia({ prefix: '/api' })
  .post('/users', async ({ body, set }) => {
    try {
      await registerUser(body);
      return { data: 'OK' };
    } catch (error) {
      if (error.message === 'Email already exists') {
        set.status = 400;
        return { error: 'Email already exists' };
      }
      set.status = 500;
      return { error: 'Internal Server Error' };
    }
  }, {
    body: t.Object({
      name: t.String(),
      email: t.String(),
      password: t.String()
    })
  })
  .post('/users/login', async ({ body, set }) => {
    try {
      const data = await loginUser(body);
      return { data };
    } catch (error) {
      if (error.message === 'Invalid email or password') {
        set.status = 401;
        return { error: 'Invalid email or password' };
      }
      set.status = 500;
      return { error: 'Internal Server Error' };
    }
  }, {
    body: t.Object({
      email: t.String(),
      password: t.String()
    })
  });
