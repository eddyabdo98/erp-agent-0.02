import { Router } from 'express';
import { CashController } from '../controllers/cash.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authenticate, CashController.getAllTransactions);
router.get('/:id', authenticate, CashController.getTransactionById);
router.post('/', authenticate, CashController.createTransaction);
router.put('/:id', authenticate, CashController.updateTransaction);
router.delete('/:id', authenticate, CashController.deleteTransaction);
router.get('/balance', authenticate, CashController.getCurrentBalance);

export const cashRouter = router;