// eslint-disable-next-line prettier/prettier
import {
  Controller,
  Param,
  Get,
  UsePipes,
  ValidationPipe,
  Post,
  Body,
  // Body,
  // Delete,
  // Patch,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from '../services/boards.service';
import { CreateBoardDto } from 'src/entities/dto/create-board.dto';
import { BoardEntity } from 'src/entities/board.entity';
// import { BoardStatus } from './board-status.enum';
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { createBoardDto } from './dto/create-board.dto';
// import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export default class BoardsController {
  constructor(private boardsService: BoardsService) {}
  // @Get('/')
  // getAllBoard(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }
  // @Post('/')
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: createBoardDto): Board {
  //   return this.boardsService.createBoard(createBoardDto);
  // }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<BoardEntity> {
    return this.boardsService.createBoard(createBoardDto);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<BoardEntity> {
    return this.boardsService.getBoardById(id);
  }

  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardsService.getBoardById(id);
  // }

  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardsService.deleteBoard(id);
  // }
  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ) {
  //   return this.boardsService.updateBoardStatus(id, status);
  // }
}
