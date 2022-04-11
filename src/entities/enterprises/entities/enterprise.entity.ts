import { Column, Model, Table, HasMany, ForeignKey, BelongsTo, DataType, Unique } from 'sequelize-typescript';
import { Education } from 'src/entities/education/entities/education.entity';
import { EnterprisesLegalForm } from 'src/entities/enterprises-legal-forms/entities/enterprises-legal-form.entity';
import { Headquarters } from 'src/entities/headquarters/entities/headquarters.entity';
import { User } from 'src/entities/users/entities/user.entity';

@Table
export class Enterprise extends Model {
    @Unique
    @Column
    name: string;

    @Column(DataType.TEXT)
    description: string;

    @Column
    about: string;

    @Column
    website: string;

    @Column
    foundation: Date;

    // external assosiations 

    @HasMany(() => Headquarters)
    headquarters: Headquarters[]

    @HasMany(() => Education)
    educations: Education[]

    // constraing internal assosiations
    @ForeignKey(() => User)
    @Unique
    @Column
    userId: number
    @BelongsTo(() => User)
    user: User

    @ForeignKey(() => EnterprisesLegalForm)
    @Column
    legalFormId: number
    @BelongsTo(() => EnterprisesLegalForm)
    legalForm: EnterprisesLegalForm


}
