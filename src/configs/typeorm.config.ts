import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  // entities: [path.join(__dirname, '../entities/**/*.entity.{js, ts}')],
  entities: [
    path.join(__dirname, '../entities/*.entity.ts'),
    path.join(__dirname, '../entities/*.entity.js'),
  ],
  database: 'commerce',
  synchronize: true,
};
