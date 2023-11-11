import { Module } from '@nestjs/common';
import { BoardsController } from '../controllers/boards.controller';
import { BoardsService } from '../services/boards.service';

@Module({
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
