import { Column, Entity } from "typeorm";
import { CommonEntity } from "./common/common.entity";

@Entity()
export class CartRequiredOptionEntity extends CommonEntity {
    @Column({ type: 'int', length: 32 })
    count!: string;

    @Column({ type: 'int' })
    cartId!: number;

    @Column({ type: 'int' })
    productRequiredOptionId!: number;
}