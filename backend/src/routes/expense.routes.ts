import { Router } from 'express';
import { ExpenseController } from '../controllers/expense.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authenticate, ExpenseController.getAllExpenses);
router.get('/:id', authenticate, ExpenseController.getExpenseById);
router.post('/', authenticate, ExpenseController.createExpense);
router.put('/:id', authenticate, ExpenseController.updateExpense);
router.delete('/:id', authenticate, ExpenseController.deleteExpense);

export const expenseRouter = router;