import express from 'express';
import animalRoutes from './routes/animalRoutes';

const app = express();
app.use(express.json());
app.use('/api', animalRoutes);

export default app;
