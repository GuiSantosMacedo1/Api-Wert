import express from 'express';
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from '../controllers/productController';
import { auth, admin } from '../middleware/auth';
import { upload } from '../middleware/upload';

const router = express.Router();

router.post('/', auth, admin, createProduct);
router.post('/', auth, admin, upload.single('image'), createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', auth, admin, updateProduct);
router.delete('/:id', auth, admin, deleteProduct);

export default router;
