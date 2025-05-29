import { upload } from '../middleware/upload';

describe('Upload Middleware', () => {
  it('should have upload middleware defined', () => {
    expect(upload).toBeDefined();
  });
});