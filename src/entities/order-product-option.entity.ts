import { Column, Entity } from "typeorm";
import { CommonEntity } from "./common/common.entity";

@Entity()
export class OrderProductOptionEntity extends CommonEntity {
    @Column({ type: 'varchar', length: 512 })
    name!: string;

    @Column({ type: 'int', length: 11 })
    price!: number;

    @Column({ type: 'int', length: 10 })
    count!: number;

    @Column({ type: 'int' })
    orderProductId!: number;
}