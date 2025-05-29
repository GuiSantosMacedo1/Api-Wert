import authRoutes from '../../src/routes/auth';
import productRoutes from '../../src/routes/product';

describe('Routes', () => {
  describe('Auth Routes', () => {
    it('should have auth routes defined', () => {
      expect(authRoutes).toBeDefined();
    });
  });
  
  describe('Product Routes', () => {
    it('should have product routes defined', () => {
      expect(productRoutes).toBeDefined();
    });
  });
});