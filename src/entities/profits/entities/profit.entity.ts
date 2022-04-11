import { Column, Model, Table, BelongsToMany, DataType, Unique } from 'sequelize-typescript';
import { JobVacancy } from 'src/entities/job-vacancies/entities/job-vacancy.entity';
import { JobVacancyProfit } from 'src/entities/job-vacancy-profits/entities/job-vacancy-profit.entity';

@Table
export class Profit extends Model {
    @Unique
    @Column
    name: string

    @Column(DataType.TEXT)
    description: string

    // n - m assosiations

    @BelongsToMany(() => JobVacancy, () => JobVacancyProfit)
    jobVacancies: JobVacancy[]
}
