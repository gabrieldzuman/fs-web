import express from 'express';
import { PrismaClient } from '@prisma/client';
import { json } from 'body-parser';

const app = express();
const prisma = new PrismaClient();

app.use(json());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

import userRoutes from './routes/user';

app.use('/api', userRoutes);

import authRoutes from './routes/auth';

app.use('/api', authRoutes);

import { swaggerUi, swaggerSpec } from './swagger';

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
