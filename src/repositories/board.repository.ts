import { Repository } from 'typeorm';
import { CreateBoardDto } from 'src/entities/dto/create-board.dto';
import { BoardStatus } from 'src/types/enums/board-status.enum';
import { CustomRepository } from 'src/configs/custom-typeorm.decorator';
import { BoardEntity } from 'src/entities/board.entity';

@CustomRepository(BoardEntity)
export class BoardRepository extends Repository<BoardEntity> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<BoardEntity> {
    const { title, description } = createBoardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    await this.save(board);
    return board;
  }
}
