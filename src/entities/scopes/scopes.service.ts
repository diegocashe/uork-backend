import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateScopeDto } from './dto/create-scope.dto';
import { UpdateScopeDto } from './dto/update-scope.dto';
import { Scope } from './entities/scope.entity';

@Injectable()
export class ScopesService {

  constructor(
    @InjectModel(Scope)
    private scopeModel: typeof Scope
  ) { }

  create(createScopeDto: CreateScopeDto) {
    return this.scopeModel.create({ ...createScopeDto });
  }

  findAll() {
    return this.scopeModel.findAll();
  }

  findOne(id: number) {
    return this.scopeModel.findByPk(id);
  }

  update(id: number, updateScopeDto: UpdateScopeDto) {
    return this.scopeModel.update(
      { ...updateScopeDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.scopeModel.destroy({
      where: {
        id: id
      }
    });
  }
}
