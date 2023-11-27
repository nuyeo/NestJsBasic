import { Entity, Column } from 'typeorm';
import { CommonEntity } from './common/common.entity';

@Entity({ name: 'user' })
export class UserEntity extends CommonEntity {
  @Column({ type: 'varchar', length: 32})
  name!: string;

  @Column({ type: 'varchar', length: 512 })
  hashedPassword!: string;

  @Column({ type: 'varchar', length: 1 })
  gender!: string;

  @Column({ type: 'int' })
  age!: number;

  @Column({ type: 'varchar', length: 16 })
  email!: string;

  @Column({ type: 'varchar', length: 16 })
  phone!: string;

  // @PrimaryGeneratedColumn()
  // id!: number;

  // @Column()
  // name!: string;

  // /**
  //  * relations
  //  */

  // @OneToMany(() => BoardEntity, (board) => board.userId)
  // boards!: BoardEntity[];
}
