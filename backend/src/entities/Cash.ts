import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './User';

@Entity()
export class Cash {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  transactionNumber: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'text' })
  type: 'income' | 'expense';

  @Column({ type: 'text' })
  category: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text' })
  paymentMethod: string;

  @Column({ type: 'text', nullable: true })
  reference: string;

  @ManyToOne(() => User, user => user.id)
  createdBy: User;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  balanceAfter: number;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}