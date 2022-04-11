import { Column, Model, Table, BelongsToMany, DataType, Unique } from 'sequelize-typescript';
import { PeopleSkill } from 'src/entities/people-skills/entities/people-skill.entity';
import { Person } from 'src/entities/people/entities/person.entity';

@Table
export class Skill extends Model {

    @Unique
    @Column
    name: string;
  
    @Column(DataType.TEXT)
    description: string;

     // n - m assosiations 
  
     @BelongsToMany(() => Person, () => PeopleSkill )
     people: Person[]
}
