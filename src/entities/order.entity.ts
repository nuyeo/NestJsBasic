import { Column, Entity } from 'typeorm';
import { CommonEntity } from './common/common.entity';

@Entity()
export class OrderEntity extends CommonEntity {
  @Column({ type: 'bigint', length: 20 })
  id2!: number;
}
