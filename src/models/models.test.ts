import mongoose from 'mongoose';

describe('Models', () => {
  it('should have Product model defined', () => {
    const Product = require('./Product').default;
    expect(Product).toBeDefined();
  });

  it('should have User model defined', () => {
    const User = require('./User').default;
    expect(User).toBeDefined();
  });
});