import { Column, Model, Table, HasMany, DataType, Unique } from 'sequelize-typescript';
import { Education } from 'src/entities/education/entities/education.entity';

@Table({
    tableName:'education_levels'
})
export class EducationLevel extends Model {
    @Unique
    @Column
    name: string;
  
    @Column(DataType.TEXT)
    description: string;

     // external assosiations 
  
    @HasMany(() => Education)
    educations: Education[]
}
