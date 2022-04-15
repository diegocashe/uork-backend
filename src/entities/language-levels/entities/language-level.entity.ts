import { Column, Model, Table, HasMany, Unique } from 'sequelize-typescript';
import { LanguagePerson } from 'src/entities/language-people/entities/language-person.entity';

@Table({
    tableName: 'language_levels'
})
export class LanguageLevel extends Model {
    @Unique
    @Column
    name: string;

    // external assosiations 

    @HasMany(() => LanguagePerson)
    languagePerson: LanguagePerson[]
}

