import { Column, Model, Table, ForeignKey, BelongsTo, DataType, BelongsToMany } from 'sequelize-typescript';
import { Headquarters } from 'src/entities/headquarters/entities/headquarters.entity';
import { JobVacancyProfit } from 'src/entities/job-vacancy-profits/entities/job-vacancy-profit.entity';
import { Modality } from 'src/entities/modalities/entities/modality.entity';
import { Person } from 'src/entities/people/entities/person.entity';
import { Position } from 'src/entities/positions/entities/position.entity';
import { Postulation } from 'src/entities/postulations/entities/postulation.entity';
import { Profit } from 'src/entities/profits/entities/profit.entity';
import { Schedule } from 'src/entities/schedules/entities/schedule.entity';

@Table({
    tableName:'job-vacancies'
})
export class JobVacancy extends Model {
    @Column
    title: string

    @Column(DataType.TEXT)
    description: string

    @Column(DataType.DOUBLE)
    range_min: number

    @Column(DataType.DOUBLE)
    range_max: number
    
    // n to m assosiation
    @BelongsToMany(() => Person, () => Postulation)
    people: Person[]

    @BelongsToMany(() => Profit, () => JobVacancyProfit)
    profits: Profit[]

    // constraing internal assosiations

    @ForeignKey(() => Position)
    @Column
    positionId: number
    @BelongsTo(() => Position)
    position: Position

    @ForeignKey(() => Schedule)
    @Column
    scheduleId: number
    @BelongsTo(() => Schedule)
    schedule: Schedule

    @ForeignKey(() => Modality)
    @Column
    modalityId: number
    @BelongsTo(() => Modality)
    modality: Modality

    @ForeignKey(() => Headquarters)
    @Column
    headquarterId: number
    @BelongsTo(() => Headquarters)
    headquarter: Headquarters

}
