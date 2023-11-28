import { Column, Entity } from "typeorm";
import { CommonEntity } from "./common/common.entity";

@Entity()
export class ProductRequiredOptionEntity extends CommonEntity {
    @Column({ type: 'varchar', length: 32 })
    name!: string;

    @Column({ type: 'int', length: 11 })
    price!: number;

    @Column({ type: 'int', length: 11 })
    stock!: string;
    
    @Column({ type: 'tinyint', length: 1 })
    status!: number;
    
    @Column({ type: 'int' })
    productId!: number;
}