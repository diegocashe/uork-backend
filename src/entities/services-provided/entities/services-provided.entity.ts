import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Person } from 'src/entities/people/entities/person.entity';
import { Scope } from 'src/entities/scopes/entities/scope.entity';
import { Service } from 'src/entities/services/entities/service.entity';

@Table({
       tableName:'services_provided'
})
export class ServicesProvided extends Model {
       // constraing internal assosiations

       @ForeignKey(() => Person)
       @Column
       personId: number
       @BelongsTo(() => Person)
       person: Person

       @ForeignKey(() => Service)
       @Column
       serviceId: number
       @BelongsTo(() => Service)
       service: Service

       @ForeignKey(() => Scope)
       @Column
       scopeId: number
       @BelongsTo(() => Scope)
       scope: Scope
}
