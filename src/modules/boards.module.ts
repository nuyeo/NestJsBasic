import { Module } from '@nestjs/common';
import BoardsController from '../controllers/boards.controller';
import { BoardsService } from '../services/boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from '../repositories/board.repository';

@Module({
  imports: [TypeOrmModule.forFeature([BoardRepository])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
