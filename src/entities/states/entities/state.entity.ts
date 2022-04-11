import { Column, Model, Table, HasMany, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import { Country } from 'src/entities/countries/entities/country.entity';
import { Localization } from 'src/entities/localizations/entities/localization.entity';

@Table
export class State extends Model {

    @Column
    name: string

    // 1 - m assosiations

    @HasMany(() => Localization)
    localizations: Localization[]

    // indexes

    @ForeignKey(() => Country)
    @Column
    countryId: number
    @BelongsTo(() => Country)
    country: Country

}
