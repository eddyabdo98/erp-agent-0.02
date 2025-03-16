import { Router } from 'express';
import { SaleController } from '../controllers/sale.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authenticate, SaleController.getAllSales);
router.get('/:id', authenticate, SaleController.getSaleById);
router.post('/', authenticate, SaleController.createSale);
router.put('/:id', authenticate, SaleController.updateSale);
router.delete('/:id', authenticate, SaleController.deleteSale);

export const salesRouter = router;