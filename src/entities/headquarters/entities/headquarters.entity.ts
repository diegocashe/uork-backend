import { Column, Model, Table, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Enterprise } from 'src/entities/enterprises/entities/enterprise.entity';
import { JobVacancy } from 'src/entities/job-vacancies/entities/job-vacancy.entity';
import { Localization } from 'src/entities/localizations/entities/localization.entity';
import { Worker } from 'src/entities/workers/entities/worker.entity';

@Table
export class Headquarters extends Model {
    @Column
    name: string;

    @Column({ defaultValue: true })
    is_principal: boolean;

    // external assosiations 

    @HasMany(() => JobVacancy)
    jobVacancies: JobVacancy[]

    @HasMany(() => Worker)
    workers: Worker[]

    // indexes constraing assosiations
    @ForeignKey(() => Enterprise)
    @Column
    enterpriseId: number
    @BelongsTo(() => Enterprise)
    enterprise: Enterprise

    @ForeignKey(() => Localization)
    @Column
    localizationId: number
    @BelongsTo(() => Localization)
    localization: Localization

}
