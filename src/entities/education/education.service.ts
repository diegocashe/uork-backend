import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education } from './entities/education.entity';

@Injectable()
export class EducationService {

  constructor(
    @InjectModel(Education)
    private educationModel: typeof Education
  ) { }

  create(createEducationDto: CreateEducationDto) {
    return 'This action adds a new education';
  }
  
  findAll() {
    return `This action returns all education`;
  }
  
  findOne(id: number) {
    return `This action returns a #${id} education`;
  }
  
  update(id: number, updateEducationDto: UpdateEducationDto) {
    return `This action updates a #${id} education`;
  }
  
  remove(id: number) {
    return `This action removes a #${id} education`;
  }
  
   findByEnterpriseId(enterpriseId: number): Promise<Education[]> {
     return this.educationModel.findAll({
       where: {
         enterpriseId: enterpriseId
       },
       include: ['educationLevel', 'educationType', 'scope', 'people']
     })
   }
}
