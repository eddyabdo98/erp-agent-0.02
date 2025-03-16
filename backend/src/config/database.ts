import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import { User } from '../entities/User';
import { Item } from '../entities/Item';
import { Client } from '../entities/Client';
import { Supplier } from '../entities/Supplier';
import { Purchase } from '../entities/Purchase';
import { Sale } from '../entities/Sale';
import { Cash } from '../entities/Cash';
import { Expense } from '../entities/Expense';
import { Stock } from '../entities/Stock';
import { Role } from '../entities/Role';

dotenv.config();

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'erp_agent',
  entities: [
    User,
    Item,
    Client,
    Supplier,
    Purchase,
    Sale,
    Cash,
    Expense,
    Stock,
    Role
  ],
  synchronize: true,
  logging: false
};

export default config;