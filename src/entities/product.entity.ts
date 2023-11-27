import { Column, Entity } from "typeorm";
import { CommonEntity } from "./common/common.entity";

@Entity()
export class ProductEntity extends CommonEntity {
    @Column({ type: 'varchar', length: 32 })
    name!: string;

    @Column({ type: 'int', length: 11 })
    price!: string;
    
    @Column({ type: 'varchar', length: 256 })
    description!: string;
    
    @Column({ type: 'longblob' })
    img!: string;
    
    @Column({ type: 'int', length: 11 })
    shippingFee!: string;
}