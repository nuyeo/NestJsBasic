import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BoardStatus } from './board-status.enum';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: string;
}
