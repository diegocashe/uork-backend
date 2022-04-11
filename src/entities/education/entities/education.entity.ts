import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { EducationLevel } from 'src/entities/education-levels/entities/education-level.entity';
import { EducationType } from 'src/entities/education-types/entities/education-type.entity';
import { Enterprise } from 'src/entities/enterprises/entities/enterprise.entity';
import { Person } from 'src/entities/people/entities/person.entity';
import { Scope } from 'src/entities/scopes/entities/scope.entity';

@Table
export class Education extends Model {

    @Column
    title: string;

    @Column
    start_date: Date;

    @Column
    end_date: Date;

    @ForeignKey(() => Person)
    @Column
    personId: number
    @BelongsTo(() => Person)
    person: Person

    @ForeignKey(() => EducationLevel)
    @Column
    educationLevelId: number
    @BelongsTo(() => EducationLevel)
    educationLevel: EducationLevel

    @ForeignKey(() => EducationType)
    @Column
    educationTypeId: number
    @BelongsTo(() => EducationType)
    educationType: EducationType

    @ForeignKey(() => Scope)
    @Column
    scopeId: number
    @BelongsTo(() => Scope)
    scope: Scope

    @ForeignKey(() => Enterprise)
    @Column
    enterpriseId: number
    @BelongsTo(() => Enterprise)
    enterprise: Enterprise

}
