import { Column, Model, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Headquarters } from 'src/entities/headquarters/entities/headquarters.entity';
import { Person } from 'src/entities/people/entities/person.entity';
import { State } from 'src/entities/states/entities/state.entity';

@Table
export class Localization extends Model{
    @Column
    description:string;

    // 1 - m assosiations

    @HasMany(() => Headquarters)
    headquarters: Headquarters[]
    
    @HasMany(() => Person)
    people: Person[]

    // indexes

    @ForeignKey(() => State)
    @Column
    stateId: number
    @BelongsTo(() => State)
    state: State
}
