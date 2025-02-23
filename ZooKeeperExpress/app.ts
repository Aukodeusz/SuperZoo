import express from 'express';
import animalRoutes from './routes/animalRoutes';

const app = express();
app.use(express.json());
app.use('/api', animalRoutes);

// Dodaj prosty endpoint testowy
app.get('/', (req, res) => {
    res.send('Server is running!');
});

export default app;
