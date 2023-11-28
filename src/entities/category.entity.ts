import { Column, Entity } from "typeorm";
import { CommonEntity } from "./common/common.entity";

@Entity()
export class CategoryEntity extends CommonEntity {
    @Column({ type: 'varchar', length: 512 })
    name!: string;
}