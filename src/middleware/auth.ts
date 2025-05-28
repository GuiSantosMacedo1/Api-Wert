import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Middleware de autenticação
export const auth = (req: Request & { user?: any }, res: Response, next: NextFunction) => {
  // Obter token do header
  const token = req.header('x-auth-token');

  // Verificar se não há token
  if (!token) {
    return res.status(401).json({ msg: 'Acesso negado. Token não fornecido.' });
  }

  try {
    // Verificar token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token inválido' });
  }
};

// Middleware de verificação de admin
export const admin = (req: Request & { user?: any }, res: Response, next: NextFunction) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ msg: 'Acesso negado. Apenas administradores podem realizar esta ação.' });
  }
  next();
};

// Middleware de tratamento de erros
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Erro:', err.message);
  res.status(500).json({ 
    error: 'Erro no servidor', 
    message: err.message 
  });
};
