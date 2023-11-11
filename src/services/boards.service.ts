import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardEntity } from 'src/entities/board.entity';
import { CreateBoardDto } from 'src/entities/dto/create-board.dto';
import { BoardRepository } from 'src/repositories/board.repository';
// import { BoardStatus } from './board-status.enum';
// import { v4 as uuid } from 'uuid';
// import { createBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}
  // getAllBoards(): BoardEntity[] {
  //   return this.boards;
  // }
  // createBoard(createBoardDto: createBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: BoardEntity = {
  //     id: uuid(),
  //     title, //title: title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }

  createBoard(createBoardDto: CreateBoardDto): Promise<BoardEntity> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async getBoardById(id: number): Promise<BoardEntity> {
    const found = await this.boardRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!found) {
      throw new NotFoundException(`Can't find BoardEntity Id: ${id}`);
    }

    return found;
  }
  // getBoardById(id: string): BoardEntity {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Can't find board with id: ${id}`);
  //   }
  //   return found;
  // }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id: ${id}`);
    }

    console.log('result', result);
  }
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }
  // updateBoardStatus(id: string, status: BoardStatus): BoardEntity {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
