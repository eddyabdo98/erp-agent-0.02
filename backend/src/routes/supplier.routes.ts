import { Router } from 'express';
import { SupplierController } from '../controllers/supplier.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authenticate, SupplierController.getAllSuppliers);
router.get('/:id', authenticate, SupplierController.getSupplierById);
router.post('/', authenticate, SupplierController.createSupplier);
router.put('/:id', authenticate, SupplierController.updateSupplier);
router.delete('/:id', authenticate, SupplierController.deleteSupplier);

export const supplierRouter = router;