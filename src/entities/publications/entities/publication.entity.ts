import { Column, Model, Table, ForeignKey, BelongsTo, Unique } from 'sequelize-typescript';
import { User } from 'src/entities/users/entities/user.entity';

@Table
export class Publication  extends Model {
    @Column
    title: string
    
    @Unique
    @Column
    source:  string

    @Column
    description: string

    @ForeignKey(() => User)
    @Column
    userId: number
    @BelongsTo(() => User)
    user: User
}
