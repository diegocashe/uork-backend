import { Column, DataType, Model, Table, ForeignKey, BelongsTo, Unique} from "sequelize-typescript"
import { Headquarters } from "src/entities/headquarters/entities/headquarters.entity"
import { Person } from "src/entities/people/entities/person.entity"
import { Position } from "src/entities/positions/entities/position.entity"

@Table
export class Worker extends Model {

   @Column(DataType.TEXT)
      description: string

    // constraing internal assosiations

    @ForeignKey(() => Position)
    @Column
    positionId: number
    @BelongsTo(() => Position)
    position: Position

    @ForeignKey(() => Person)
    @Unique
    @Column
    personId: number
    @BelongsTo(() => Person)
    person: Person

    @ForeignKey(() => Headquarters)
    @Column
    headquarterId: number
    @BelongsTo(() => Headquarters)
    headquarter: Headquarters

}
