import { Column, Entity } from "typeorm";
import { CommonEntity } from "./common/common.entity";
import { CalculationType } from "src/types/enums/caculation-type.enum";

@Entity()
export class OrderProductBundleEntity extends CommonEntity {
    @Column({ type: 'varchar', length: 128 })
    shippingCalculation!: keyof typeof CalculationType;

    @Column({ type: 'int', length: 11 })
    shippingFeeMin!: string;
}