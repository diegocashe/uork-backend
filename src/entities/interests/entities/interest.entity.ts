import { Column, Model, Table, ForeignKey, } from 'sequelize-typescript';
import { Person } from 'src/entities/people/entities/person.entity';
import { User } from 'src/entities/users/entities/user.entity';

@Table
export class Interest extends Model {

      @ForeignKey(() => User)
      @Column
      userId: number

      @ForeignKey(() => Person)
      @Column
      interestedPersonId: number
}
