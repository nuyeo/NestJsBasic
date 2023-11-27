import { Column, Entity } from "typeorm";
import { CommonEntity } from "./common/common.entity";

@Entity()
export class OrderProductRequiredOptionEntity extends CommonEntity {
    @Column({ type: 'varchar', length: 128 })
    name!: string;

    @Column({ type: 'int', length: 11 })
    price!: number;

    @Column({ type: 'int', length: 11 })
    count!: number;

    @Column({ type: 'bigint', length: 20 })
    cartProductId!: number;
}