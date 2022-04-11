import { Column, Model, Table, HasMany, DataType, Unique } from 'sequelize-typescript';
import { Education } from 'src/entities/education/entities/education.entity';
import { ServicesProvided } from 'src/entities/services-provided/entities/services-provided.entity';

@Table
export class Scope extends Model {
    @Unique
    @Column
    name: string;

    @Column(DataType.TEXT)
    description: string;

    // external assosiations 

    @HasMany(() => ServicesProvided)
    servicesProvided: ServicesProvided[]

    @HasMany(() => Education)
    educations: Education[]
}
