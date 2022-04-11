import { Column, Model, Table, HasMany, DeletedAt, Unique } from 'sequelize-typescript';
import { User } from 'src/entities/users/entities/user.entity';
// import { User } from './users/entities/user.entity';

@Table
export class Role extends Model {
    @Unique
    @Column
    name: string;

    @Column
    description: string;

    // external assosiations 

    @HasMany(() => User)
    users: User[]

    @DeletedAt
    deletionDate: Date;
}
