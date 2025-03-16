import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Sale } from './Sale';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true, nullable: true })
  code: string;

  @Column({ nullable: true })
  contactPerson: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  address: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  creditLimit: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  currentBalance: number;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(() => Sale, sale => sale.client)
  sales: Sale[];

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}