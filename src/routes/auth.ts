import express from 'express';
import { register, login, validateToken } from '../controllers/authController';
import { auth } from '../middleware/auth';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/validate', auth, validateToken);

export default router;
