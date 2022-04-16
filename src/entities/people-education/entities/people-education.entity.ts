


import { Column, Model, Table, ForeignKey, } from 'sequelize-typescript';
import { Education } from 'src/entities/education/entities/education.entity';
import { Person } from 'src/entities/people/entities/person.entity';

@Table({
    tableName: 'people_education'
})
export class PeopleEducation extends Model {

    @ForeignKey(() => Person)
    @Column
    personId: number

    @ForeignKey(() => Education)
    @Column
    educationId: number
}
