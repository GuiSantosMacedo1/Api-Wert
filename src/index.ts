import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import { errorHandler } from './middleware/auth';
import authRoutes from './routes/auth';
import productRoutes from './routes/product';
import path from 'path';

dotenv.config();


const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  next();
});
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));


app.get('/', (req, res) => {
  res.send('API está funcionando');
});

app.use(errorHandler);

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000; 
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
