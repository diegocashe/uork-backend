import { Column, Model, Table, HasMany, ForeignKey, BelongsTo, BelongsToMany, DataType, Unique } from 'sequelize-typescript';
import { Education } from 'src/entities/education/entities/education.entity';
import { Interest } from 'src/entities/interests/entities/interest.entity';
import { JobVacancy } from 'src/entities/job-vacancies/entities/job-vacancy.entity';
import { LanguagePerson } from 'src/entities/language-people/entities/language-person.entity';
import { Localization } from 'src/entities/localizations/entities/localization.entity';
import { PeopleEducation } from 'src/entities/people-education/entities/people-education.entity';
import { PeopleSkill } from 'src/entities/people-skills/entities/people-skill.entity';
import { Postulation } from 'src/entities/postulations/entities/postulation.entity';
import { ServicesProvided } from 'src/entities/services-provided/entities/services-provided.entity';
import { Skill } from 'src/entities/skills/entities/skill.entity';
import { User } from 'src/entities/users/entities/user.entity';

@Table
export class Person extends Model {
    @Column
    firstName: string

    @Column
    LastName: string

    @Column(DataType.TEXT)
    description: string

    @Column(DataType.TEXT)
    about: string

    @Column
    phone: string

    @Column
    mobile: string

    @Column
    birthday: Date

    @Column
    passport: string

    @Column
    photo: string

    @Column
    ci: string

    @Column(DataType.SMALLINT)
    rate:  number

    // faltan datos.... numeros, identificaciones etc

    // 1 - m assosiations
    
    @HasMany(() => LanguagePerson)
    languages: LanguagePerson[]
    
    @HasMany(() => ServicesProvided)
    servicesProvided: ServicesProvided[]
    
    // n - m assosiations
    
    @BelongsToMany(() => Education, () => PeopleEducation)
    educations: Education[]
    
    @BelongsToMany(() => JobVacancy, () => Postulation)
    postulations: JobVacancy[]
    
    @BelongsToMany(() => Skill, () => PeopleSkill)
    skills: Skill[]
        
    @BelongsToMany(() => User, () => Interest)
    interests: User[]

    // @HasMany(() => Interest)
    // interests: Interest[]

    // indexes assosiations constraing

    @ForeignKey(() => User)
    @Unique
    @Column
    userId: number
    @BelongsTo(() => User)
    user: User

    @ForeignKey(() => Localization)
    @Column
    localizationId: number
    @BelongsTo(() => Localization)
    localization: Localization

    // 

}
