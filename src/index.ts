import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import { errorHandler } from './middleware/auth';
import authRoutes from './routes/auth';
import productRoutes from './routes/product';

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('API está funcionando');
});

app.use(errorHandler);

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001; 
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
