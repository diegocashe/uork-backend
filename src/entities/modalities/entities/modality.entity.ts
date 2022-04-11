import { Column, Model, Table, HasMany, Unique, DataType } from 'sequelize-typescript';
import { JobVacancy } from 'src/entities/job-vacancies/entities/job-vacancy.entity';

@Table
export class Modality extends Model {
    @Unique
    @Column
    name: string;

    @Column(DataType.TEXT)
    description: string;

    // external assosiations 

    @HasMany(() => JobVacancy)
    jobVacancies: JobVacancy[]
}
