import { Router } from 'express';
import { ItemController } from '../controllers/item.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authenticate, ItemController.getAllItems);
router.get('/:id', authenticate, ItemController.getItemById);
router.post('/', authenticate, ItemController.createItem);
router.put('/:id', authenticate, ItemController.updateItem);
router.delete('/:id', authenticate, ItemController.deleteItem);

export const itemRouter = router;