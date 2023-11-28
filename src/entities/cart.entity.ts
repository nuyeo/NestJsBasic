import { Column, Entity } from 'typeorm';
import { CommonEntity } from './common/common.entity';

@Entity()
export class CartEntity extends CommonEntity {
  @Column({ type: 'int', length: 11 })
  count!: number;

  @Column({ type: 'bigint', length: 20 })
  productId!: number;

  @Column({ type: 'bigint', length: 20 })
  userId!: number;
}
