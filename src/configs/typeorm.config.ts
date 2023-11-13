import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const NODE_ENV = process.env.NODE_ENV;

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env[`${NODE_ENV}_DB_HOST`],
  port: Number(process.env[`${NODE_ENV}_DB_PORT`]),
  username: process.env[`${NODE_ENV}_DB_USERNAME`],
  password: process.env[`${NODE_ENV}_DB_PASSWORD`],
  // entities: [path.join(__dirname, '../entities/**/*.entity.{js, ts}')],
  entities: [
    path.join(__dirname, '../entities/*.entity.ts'),
    path.join(__dirname, '../entities/*.entity.js'),
  ],
  database: 'commerce',
  synchronize: true,
};
