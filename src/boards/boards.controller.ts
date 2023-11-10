// eslint-disable-next-line prettier/prettier
import {
  Controller,
  // Get,
  // Post,
  // Body,
  // Param,
  // Delete,
  // Patch,
  // UsePipes,
  // ValidationPipe,
} from '@nestjs/common';
// import { BoardsService } from './boards.service';
// import { BoardStatus } from './board-status.enum';
// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// import { createBoardDto } from './dto/create-board.dto';
// import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards')
export class BoardsController {
  // constructor(private boardsService: BoardsService) {}
  // @Get('/')
  // getAllBoard(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }
  // @Post('/')
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: createBoardDto): Board {
  //   return this.boardsService.createBoard(createBoardDto);
  // }
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
