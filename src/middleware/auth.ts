import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const auth = (req: Request & { user?: any }, res: Response, next: NextFunction) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'Acesso negado. Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token inválido' });
  }
};

export const admin = (req: Request & { user?: any }, res: Response, next: NextFunction) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ msg: 'Acesso negado. Apenas administradores podem realizar esta ação.' });
  }
  next();
};

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error('Erro:', err.message);
  res.status(500).json({ 
    error: 'Erro no servidor', 
    message: err.message 
  });
};
