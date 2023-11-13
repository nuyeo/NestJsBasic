import { Module } from '@nestjs/common';
import BoardsController from '../controllers/boards.controller';
import { BoardsService } from '../services/boards.service';
import { BoardRepository } from '../repositories/board.repository';
import { CustomTypeOrmModule } from 'src/configs/custom-typeorm.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardEntity } from 'src/entities/board.entity';

@Module({
  imports: [
    CustomTypeOrmModule.forCustomRepository([BoardRepository]),
    TypeOrmModule.forFeature([BoardEntity]),
  ],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
