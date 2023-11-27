import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { BoardStatus } from 'src/types/enums/board-status.enum';

@Entity({ name: 'board' })
export class CommonColumns extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;
}

export class BoardEntity {
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

  // @ManyToOne(() => UserEntity, (user) => user.boards)
  // @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  // user!: UserEntity;
}
export { BaseEntity };
