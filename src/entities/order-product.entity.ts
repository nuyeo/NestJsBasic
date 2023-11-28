import { Column, Entity } from 'typeorm';
import { CommonEntity } from './common/common.entity';

@Entity()
export class OrderProductEntity extends CommonEntity {
  @Column({ type: 'int' })
  cartId!: number;

  @Column({ type: 'int' })
  orderBundleId!: number;
}
