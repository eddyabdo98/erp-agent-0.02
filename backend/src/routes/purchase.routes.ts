import { Router } from 'express';
import { PurchaseController } from '../controllers/purchase.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authenticate, PurchaseController.getAllPurchases);
router.get('/:id', authenticate, PurchaseController.getPurchaseById);
router.post('/', authenticate, PurchaseController.createPurchase);
router.put('/:id', authenticate, PurchaseController.updatePurchase);
router.delete('/:id', authenticate, PurchaseController.deletePurchase);

export const purchaseRouter = router;