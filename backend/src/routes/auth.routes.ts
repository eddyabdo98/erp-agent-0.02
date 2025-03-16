import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/change-password', authenticate, AuthController.changePassword);
router.get('/me', authenticate, AuthController.me);

export const authRouter = router;