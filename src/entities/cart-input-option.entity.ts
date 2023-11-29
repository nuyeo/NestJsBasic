import { Column, Entity } from 'typeorm';
import { CommonEntity } from './common/common.entity';

@Entity()
export class CartInputOptionEntity extends CommonEntity {
  @Column({ type: 'varchar', length: 512 })
  name!: string;

  @Column({ type: 'int' })
  cartRequiredId!: number;

  @Column({ type: 'int' })
  productInputOptionId!: number;

  @Column({ type: 'varchar', length: 512 })
  topic!: string;

  @Column({ type: 'varchar', length: 512 })
  hint!: string;
}
