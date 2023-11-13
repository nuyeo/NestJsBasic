import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BoardEntity } from './board.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  /**
   * relations
   */

  @OneToMany(() => BoardEntity, (board) => board.userId)
  boards!: BoardEntity[];
}
