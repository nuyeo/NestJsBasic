import { Module } from '@nestjs/common';
import { BoardsModule } from './boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.LOCAL_DB_HOST,
      username: process.env.LOCAL_DB_USERNAME,
      password: process.env.LOCAL_DB_PASSWORD,
    }),
    BoardsModule,
  ],
})
export class AppModule {}
