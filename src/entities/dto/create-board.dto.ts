import { PickType } from '@nestjs/mapped-types';
import { BoardEntity } from '../board.entity';

export class CreateBoardDto extends PickType(BoardEntity, [
  'title',
  'description',
] as const) {}
