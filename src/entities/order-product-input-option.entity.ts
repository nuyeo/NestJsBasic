import { Column, Entity } from "typeorm";
import { CommonEntity } from "./common/common.entity";

@Entity()
export class OrderProductInputOptionEntity extends CommonEntity {
    @Column({ type: 'varchar', length: 128 })
    name!: string;

    @Column({ type: 'varchar', length: 128 })
    value!: string;

    @Column({ type: 'int', length: 11 })
    count!: number;

    @Column({ type: 'bigint', length: 20 })
    orderProductRequiredOptionId!: number;
}