import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class DashboardController {
  public static async getStats(req: Request, res: Response): Promise<void> {
    try {
      const [
        totalItems,
        totalClients,
        purchases,
        sales,
        cashTransactions,
      ] = await Promise.all([
        prisma.item.count(),
        prisma.client.count(),
        prisma.purchase.findMany({
          select: {
            total: true,
          },
        }),
        prisma.sale.findMany({
          select: {
            total: true,
          },
        }),
        prisma.cash.findMany({
          select: {
            amount: true,
            type: true,
          },
        }),
      ]);

      const totalPurchases = purchases.reduce((sum, p) => sum + Number(p.total), 0);
      const totalSales = sales.reduce((sum, s) => sum + Number(s.total), 0);
      
      const cashBalance = cashTransactions.reduce((balance, transaction) => {
        const amount = Number(transaction.amount);
        return transaction.type === 'INCOME' ? balance + amount : balance - amount;
      }, 0);

      res.json({
        totalItems,
        totalClients,
        totalPurchases,
        totalSales,
        cashBalance,
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}