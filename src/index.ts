import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import { errorHandler } from './middleware/auth';
import authRoutes from './routes/auth';
import productRoutes from './routes/product';

// Carregar variáveis de ambiente
dotenv.config();

// Inicializar Express
const app = express();

// Middleware para processar JSON
app.use(express.json());

// Conectar ao MongoDB
connectDB();

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Rota básica
app.get('/', (req, res) => {
  res.send('API está funcionando');
});

// Middleware de tratamento de erros
app.use(errorHandler);

// Iniciar servidor
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001; // Mudando para porta 3001
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
