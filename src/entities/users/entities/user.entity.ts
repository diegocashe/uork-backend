import { Column, Model, Table, HasMany, ForeignKey, BelongsTo, BelongsToMany, Unique, HasOne } from 'sequelize-typescript';
import { Enterprise } from 'src/entities/enterprises/entities/enterprise.entity';
import { Interest } from 'src/entities/interests/entities/interest.entity';
import { Person } from 'src/entities/people/entities/person.entity';
import { Publication } from 'src/entities/publications/entities/publication.entity';
import { Role } from 'src/entities/roles/entities/role.entity';

@Table
export class User extends Model {

    @Unique
    @Column
    username: string;

    @Column
    password: string;

    @Column
    ip: string;

    @Column({ defaultValue: true })
    isActive: boolean;

    // external assosiations 

    @HasMany(() => Publication)
    publications: Publication[]

    @HasOne(() => Enterprise)
    enterprise: Enterprise

    @HasOne(() => Person)
    person: Person

    //

    @BelongsToMany(() => Person, () => Interest)
    interested: Person[]

    // constraing internal assosiations

    @ForeignKey(() => Role)
    @Column({defaultValue: 1})
    roleId: number
    @BelongsTo(() => Role)
    role: Role
}
