import { Column, Entity } from 'typeorm';
import { CommonEntity } from './common/common.entity';

@Entity()
export class CartInputOptionEntity extends CommonEntity {
  @Column({ type: 'varchar', length: 128 })
  name!: string;

  @Column({ type: 'int', length: 32 })
  count!: number;

  @Column({ type: 'bigint', length: 20 })
  cartRequiredId!: number;

  @Column({ type: 'bigint', length: 20 })
  productInputOptionId!: number;
}
