import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { hash, genSalt } from 'bcrypt'
import { CreateOptions } from 'sequelize/types';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) { }

  async create(createUserDto: CreateUserDto, options?: CreateOptions) {
    // here we used bycryp
    const { password, ...data } = createUserDto
    const hashPass = await hash(password, (await genSalt()))
    if (options?.transaction) {
      return this.userModel.create({ ...data, password: hashPass }, options);

    }
    return this.userModel.create({ ...data, password: hashPass });
  }

  findAll() {
    return this.userModel.findAll({ include: ['role'] });
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findByPk(id, { include: ['role', 'person', 'enterprise'] })
  }

  findByUsername(username: string): Promise<User | null> {
    return this.userModel.findOne({ where: { username }, include: 'role' });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userModel.update(
      { ...updateUserDto },
      {
        where: { id: id }
      });
  }

  remove(id: number) {
    return this.userModel.destroy({
      where: {
        id: id
      }
    });
  }
}
