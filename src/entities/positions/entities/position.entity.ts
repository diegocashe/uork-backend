import { Column, Model, Table, HasMany, DataType, Unique } from 'sequelize-typescript';
import { JobVacancy } from 'src/entities/job-vacancies/entities/job-vacancy.entity';
import { Worker } from 'src/entities/workers/entities/worker.entity';


@Table
export class Position extends Model {
    @Unique
    @Column
    name: string;

    @Column(DataType.TEXT)
    description: string;

    // 1 - m assosiations 

    @HasMany(() => Worker)
    workers: Worker[]

    @HasMany(() => JobVacancy)
    jobVacancies: JobVacancy[]
}
