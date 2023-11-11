import { EntityRepository, Repository } from 'typeorm';
import { Board } from '../modules/board.entity';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {}
