import { Column, Entity } from 'typeorm';
import { CommonEntity } from './common/common.entity';

@Entity()
export class OrderProductEntity extends CommonEntity {
  @Column({ type: 'bigint', length: 20 })
  cartId!: number;

  @Column({ type: 'bigint', length: 20 })
  orderBundle!: number;
}
