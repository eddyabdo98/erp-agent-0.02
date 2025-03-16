import { Router } from 'express';
import { StockController } from '../controllers/stock.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authenticate, StockController.getAllStock);
router.get('/:id', authenticate, StockController.getStockById);
router.post('/', authenticate, StockController.createStock);
router.put('/:id', authenticate, StockController.updateStock);
router.delete('/:id', authenticate, StockController.deleteStock);
router.get('/item/:itemId', authenticate, StockController.getStockByItem);
router.post('/adjust/:id', authenticate, StockController.adjustStock);

export const stockRouter = router;