import { Column, Entity } from 'typeorm';
import { CommonEntity } from './common/common.entity';

@Entity()
export class OrderProductInputOptionEntity extends CommonEntity {
  @Column({ type: 'varchar', length: 512 })
  name!: string;

  @Column({ type: 'varchar', length: 512 })
  value!: string;

  @Column({ type: 'int', length: 10 })
  count!: number;

  @Column({ type: 'int' })
  orderProductRequiredOptionId!: number;
}
