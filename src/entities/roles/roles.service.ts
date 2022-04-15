import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {

  constructor(
    @InjectModel(Role)
    private roleModel: typeof Role,
  ) { }

  create(createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleModel.create({ ...createRoleDto });
  }

  async bulkCreate(createRoleDto: CreateRoleDto[]): Promise<boolean> {
    await this.roleModel.bulkCreate(createRoleDto.map(e => ({ ...e })));
    return true
  }

  findAll(): Promise<Role[]> {
    return this.roleModel.findAll();
  }

  findOne(id: number): Promise<Role> {
    return this.roleModel.findByPk(id);
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleModel.destroy({
      where: {
        id: id
      }
    });
  }

  async remove(id: number): Promise<void> {
    const role = await this.roleModel.findByPk(id);
    return role.destroy();
  }
}
