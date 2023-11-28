import { Column, Entity } from 'typeorm';
import { CommonEntity } from './common/common.entity';

@Entity()
export class CartEntity extends CommonEntity {
  @Column({ type: 'int', length: 10 })
  count!: number;

  @Column({ type: 'int' })
  productId!: number;

  @Column({ type: 'int' })
  userId!: number;
}
