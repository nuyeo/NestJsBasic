import { Entity, Column } from "typeorm";
import { CommonEntity } from "./common/common.entity";

@Entity({ name: 'seller' })
export class SellerEntity extends CommonEntity {
    @Column({ type: 'varchar', length: 32 })
    name!: string;

    @Column({ type: 'varchar', length: 512 })
    hashedPassword!: string;

    @Column({ type: 'varchar', length: 128, unique: true })
    email!: string;

    @Column({ type: 'varchar', length: 16 })
    phone!: string;

    @Column({ type: 'varchar', length: 32 })
    business_number!: string;
}