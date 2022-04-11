import { Injectable } from '@nestjs/common';
import { EnterprisesService } from 'src/entities/enterprises/enterprises.service';
import { HeadquartersService } from 'src/entities/headquarters/headquarters.service';
import { PeopleService } from 'src/entities/people/people.service';
import { UsersService } from 'src/entities/users/users.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { EnterpriseProfile } from './entities/enterprise.profile';
import { PersonProfile } from './entities/person.profile';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {

  constructor(
    private usersService: UsersService,
    private peopleService: PeopleService,
    private enterpriseService: EnterprisesService,
    private headquartersService: HeadquartersService
    // private jwtService: JwtService,
  ) { }
  create(createProfileDto: CreateProfileDto) {
    return 'This action adds a new profile';
  }

  async findOne(id: number): Promise<Profile> {
    const user = (await this.usersService.findOne(id))

    if (user.enterprise) {
      delete user.person;

      const profile: EnterpriseProfile = new EnterpriseProfile({ username: user.username, id: id }, user.roleId)
      const enterprise = await this.enterpriseService.findOne(user.enterprise.id)
      const headquarters = await this.headquartersService.findOne(user.enterprise.id)
      profile.patchEnterprise(enterprise)
      console.log(headquarters)

      console.log(profile.plainObject())
      // profile.headquarters = ;
      return profile.plainObject()
    }
    if (user.person) {
      delete user.enterprise;
      user.person = (await this.peopleService.findOne(user.person.id)).get({ plain: true })
    }
    const { role, password, person, enterprise, ...userData } = user
    // profile = Profile.createProfile({ ...userData }, user.roleId)
    // profile
    // console.log(profile.plainObject())
    const personProfile: PersonProfile = new PersonProfile({ username: 'sad', id: 2 }, 2)
    // return profile.plainObject();
    // // return {}
  }


  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
