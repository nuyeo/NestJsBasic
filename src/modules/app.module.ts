import { Module } from '@nestjs/common';
import { BoardsModule } from './boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { typeORMConfig } from 'src/configs/typeorm.config';

dotenv.config();

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), BoardsModule],
})
export class AppModule {}
