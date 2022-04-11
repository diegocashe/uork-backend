import { Column, Model, Table, HasMany, Unique } from 'sequelize-typescript';
import { State } from 'src/entities/states/entities/state.entity';

@Table
export class Country extends Model{
    @Unique
    @Column
    name:string;

    @Column
    shortName:string;

    // 1 - m assosiations

    @HasMany(() => State)
    states: State[]

}
