import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { Person } from 'src/entities/people/entities/person.entity';
import { Skill } from 'src/entities/skills/entities/skill.entity';

@Table({
    tableName:'people_skills'
})
export class PeopleSkill extends Model {
    // n to m assosiations
    @ForeignKey(() => Person)
    @Column
    personId: number

    @ForeignKey(() => Skill)
    @Column
    skillId: number
}
