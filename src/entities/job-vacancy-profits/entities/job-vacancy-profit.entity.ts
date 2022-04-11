import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { JobVacancy } from 'src/entities/job-vacancies/entities/job-vacancy.entity';
import { Profit } from 'src/entities/profits/entities/profit.entity';

@Table
export class JobVacancyProfit extends Model {

    // constraing internal
    // n to m assosiations
    @ForeignKey(() => JobVacancy)
    @Column
    jobVacancyId: number

    @ForeignKey(() => Profit)
    @Column
    profitId: number
}
