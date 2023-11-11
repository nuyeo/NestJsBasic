import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { BoardStatus } from 'src/types/enums/board-status.enum';

@Entity({ name: 'board' })
export class BoardEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  userId!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  status!: BoardStatus;

  /**
   * relations
   */

  @ManyToOne(() => UserEntity, (user) => user.boards)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user!: UserEntity;
}
