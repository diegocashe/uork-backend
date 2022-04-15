import { Column, Model, Table, HasMany, Unique } from 'sequelize-typescript';
import { Enterprise } from "src/entities/enterprises/entities/enterprise.entity";

@Table({
    tableName: 'enterprises_legal_forms'
})
export class EnterprisesLegalForm extends Model {
    @Unique
    @Column
    name: string;

    @Column
    description: string;

    @HasMany(() => Enterprise)
    enterprises: Enterprise[]
}
