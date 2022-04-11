import { Column, Model, Table, HasMany, ForeignKey, BelongsToMany, DataType, Unique } from 'sequelize-typescript';
import { ServicesProvided } from 'src/entities/services-provided/entities/services-provided.entity';

@Table
export class Service extends Model {
    
    @Unique
    @Column
    name: string;

    @Column(DataType.TEXT)
    description: string;
    
    // external assosiations 

    @HasMany(() => ServicesProvided)
    ServicesProvided: ServicesProvided[]

}
