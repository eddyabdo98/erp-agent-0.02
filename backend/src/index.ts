import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRouter from './routes/auth.routes';
import { userRouter } from './routes/user.routes';
import { itemRouter } from './routes/item.routes';
import { clientRouter } from './routes/client.routes';
import { supplierRouter } from './routes/supplier.routes';
import { purchaseRouter } from './routes/purchase.routes';
import { salesRouter } from './routes/sales.routes';
import { cashRouter } from './routes/cash.routes';
import { expenseRouter } from './routes/expense.routes';
import { stockRouter } from './routes/stock.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 10100;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/items', itemRouter);
app.use('/api/clients', clientRouter);
app.use('/api/suppliers', supplierRouter);
app.use('/api/purchases', purchaseRouter);
app.use('/api/sales', salesRouter);
app.use('/api/cash', cashRouter);
app.use('/api/expenses', expenseRouter);
app.use('/api/stock', stockRouter);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});