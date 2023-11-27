import { Column, Entity } from "typeorm";
import { CommonEntity } from "./common/common.entity";

@Entity()
export class ProductOptionEntity extends CommonEntity {
    @Column({ type: 'varchar', length: 128 })
    name!: string;

    @Column({ type: 'int', length: 11 })
    price!: number;
    
    @Column({ type: 'int', length: 11 })
    stock!: number;
    
    @Column({ type: 'tinyint', length: 1 })
    status!: string;
    
    @Column({ type: 'bigint', length: 20 })
    productId!: number;
}