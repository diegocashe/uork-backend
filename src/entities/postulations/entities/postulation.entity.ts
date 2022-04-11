import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { JobVacancy } from 'src/entities/job-vacancies/entities/job-vacancy.entity';
import { Person } from 'src/entities/people/entities/person.entity';

@Table
export class Postulation extends Model {
    // @Column({ defaultValue: true })
    // viewed: boolean

    // constraing internal
    // n to m assosiations
    @ForeignKey(() => JobVacancy)
    @Column
    jobVacancyId: number

    @ForeignKey(() => Person)
    @Column
    personId: number
}
