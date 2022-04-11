import { Column, DataType, Model, Table, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript"
import { JobVacancy } from "src/entities/job-vacancies/entities/job-vacancy.entity"


@Table
export class Schedule extends Model {

    @Column
    start_time: number

    @Column
    end_time: number

    @Column
    sunday: boolean

    @Column
    monday: boolean

    @Column
    tuesday: boolean

    @Column
    wednesday: boolean

    @Column
    thursday: boolean

    @Column
    friday: boolean
    
    @Column
    saturday: boolean

    @HasMany(() => JobVacancy)
    jobVacancies: JobVacancy[]

}
