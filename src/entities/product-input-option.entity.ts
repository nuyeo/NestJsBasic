import { Column, Entity } from "typeorm";
import { CommonEntity } from "./common/common.entity";

@Entity()
export class ProductInputOptionEntity extends CommonEntity {
    @Column({ type: 'varchar', length: 32 })
    name!: string;

    @Column({ type: 'varchar', length: 128 })
    value!: string;

    @Column({ type: 'varchar', length: 256 })
    description!: string;
    
    @Column({ type: 'tinyint', length: 1 })
    required!: number;
    
    @Column({ type: 'bigint', length: 20 })
    productRequiredOptionId!: string;
}