import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Sequelize } from 'sequelize-typescript';
import { Transaction } from 'sequelize/types';
import { EnterprisesService } from 'src/entities/enterprises/enterprises.service';
import { PeopleService } from 'src/entities/people/people.service';
import { User } from 'src/entities/users/entities/user.entity';
import { UsersService } from 'src/entities/users/users.service';
import { employ, enterprise } from './types/singinTypes';
import { ValidatedUser } from './types/validatedUser';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private peopleService: PeopleService,
    private enterpriseService: EnterprisesService,
    private jwtService: JwtService,
    private sequelize: Sequelize
  ) { }

  async validateUser(username: string, pass: string): Promise<ValidatedUser | null> {
    const user: User | null = await this.usersService.findByUsername(username);
    // console.log(user.get({ plain: true }))
    if (user && (await compare(pass, user.password))) {
      const { password, ...result } = user.get();
      return result;
    }
    return null;
  }

  async login(username: string, id: number) {
    const payload = { username: username, sub: id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  private logout(): void {
    // solo borramos el access_token en el cliente
  }


  async singin(user: enterprise | employ): Promise<{ access_token: string }> {
    try {
      const UserId = await this.sequelize.transaction(async t => {
        const transactionHost = { transaction: t };
        let newUser: User;
        if (user.userType === 'enterprise' && 'enterpriseName' in user) {
          newUser = await this.usersService.create({
            username: user.username,
            password: user.password,
            roleId: 4
          }, transactionHost)
          const newEnterprise = await this.enterpriseService.create({
            name: user.enterpriseName,
            userId: newUser.id
          }, transactionHost)
        }

        if (user.userType === 'employ' && 'firstName' in user) {
          newUser = await this.usersService.create({
            username: user.username,
            password: user.password,
            roleId: 3
          }, transactionHost)
          const newPerson = await this.peopleService.create({
            firstName: user.firstName,
            LastName: user.lastName,
            userId: newUser.id
          }, transactionHost)
        }
        return newUser.id
      })
      const newUser: User = await this.usersService.findOne(UserId);
      return this.login(newUser.username, newUser.id)
    } catch (error) {
      throw new InternalServerErrorException(error, 'Transaction error');
    }
  }
}
