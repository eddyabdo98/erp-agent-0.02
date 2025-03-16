import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import { userRouter } from './routes/user.routes';
import { authRouter } from './routes/auth.routes';
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
const PORT = process.env.PORT || 10100;

app.use(cors());
app.use(express.json());

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

// Database connection
createConnection()
  .then(() => {
    console.log('Database connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });