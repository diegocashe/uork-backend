import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { LanguageLevel } from 'src/entities/language-levels/entities/language-level.entity';
import { Language } from 'src/entities/languages/entities/language.entity';
import { Person } from 'src/entities/people/entities/person.entity';

@Table({
    tableName:'language_people'
})
export class LanguagePerson extends Model {

    @ForeignKey(() => Person)
    @Column
    personId: number
    @BelongsTo(() => Person)
    person: Person

    @ForeignKey(() => Language)
    @Column
    languageId: number
    @BelongsTo(() => Language)
    language: Language

    @ForeignKey(() => LanguageLevel)
    @Column
    languageLevelId: number
    @BelongsTo(() => LanguageLevel)
    languageLevel: LanguageLevel

}
