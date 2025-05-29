import mongoose from 'mongoose';

// Verificar se os modelos existem
describe('Models', () => {
  it('should have Product model defined', () => {
    // Importar o modelo diretamente para verificar se ele existe
    const Product = require('./Product').default;
    expect(Product).toBeDefined();
  });

  it('should have User model defined', () => {
    // Importar o modelo diretamente para verificar se ele existe
    const User = require('./User').default;
    expect(User).toBeDefined();
  });
});