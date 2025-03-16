import { Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.post('/login', AuthController.login);
router.post('/register', AuthController.register);
router.post('/logout', authenticate, AuthController.logout);
router.get('/me', authenticate, AuthController.getCurrentUser);
router.put('/change-password', authenticate, AuthController.changePassword);

export const authRouter = router;