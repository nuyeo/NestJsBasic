import { Column, Entity } from "typeorm";
import { CommonEntity } from "./common/common.entity";

@Entity()
export class ProductEntity extends CommonEntity {
    @Column({ type: 'varchar', length: 32 })
    name!: string;

    @Column({ type: 'int', length: 11 })
    price!: number;
    
    @Column({ type: 'varchar', length: 256 })
    description!: string;
    
    @Column({ type: 'varchar', length: 4096 })
    img!: string;
    
    @Column({ type: 'int', length: 11 })
    shippingFee!: number;

    @Column({ type: 'int' })
    categoryId!: number;

    @Column({ type: 'int' })
    companyId!: number;

    @Column({ type: 'int' })
    bundleId!: number;
}