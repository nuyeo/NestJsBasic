import { Column, Entity } from 'typeorm';
import { CommonEntity } from './common/common.entity';

@Entity()
export class OrderEntity extends CommonEntity {
  @Column({ type: 'int' })
  userId!: number;
}
