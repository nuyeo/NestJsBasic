import { Column, Entity } from "typeorm";
import { CommonEntity } from "./common/common.entity";

@Entity()
export class CompanyEntity extends CommonEntity {
    @Column({ name: 'name', type: 'varchar', length: 32 })
    name!: string;
}