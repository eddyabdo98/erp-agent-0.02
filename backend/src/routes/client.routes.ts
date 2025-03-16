import { Router } from 'express';
import { ClientController } from '../controllers/client.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authenticate, ClientController.getAllClients);
router.get('/:id', authenticate, ClientController.getClientById);
router.post('/', authenticate, ClientController.createClient);
router.put('/:id', authenticate, ClientController.updateClient);
router.delete('/:id', authenticate, ClientController.deleteClient);

export const clientRouter = router;