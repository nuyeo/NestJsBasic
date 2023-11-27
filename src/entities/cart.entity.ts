import { Column, Entity } from "typeorm";
import { CommonEntity } from "./common/common.entity";

@Entity()
export class CartEntity extends CommonEntity {
    @Column({ type: 'int', length: 32 })
    count!: string;
}