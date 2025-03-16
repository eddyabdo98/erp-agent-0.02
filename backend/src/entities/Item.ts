import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Stock } from './Stock';
import { Purchase } from './Purchase';
import { Sale } from './Sale';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  code: string;

  @Column()
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  purchasePrice: number;

  @Column('decimal', { precision: 10, scale: 2 })
  sellingPrice: number;

  @Column({ nullable: true })
  unit: string;

  @Column({ nullable: true })
  category: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Stock, stock => stock.item)
  stocks: Stock[];

  @OneToMany(() => Purchase, purchase => purchase.item)
  purchases: Purchase[];

  @OneToMany(() => Sale, sale => sale.item)
  sales: Sale[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}