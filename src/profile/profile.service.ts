import { Injectable } from '@nestjs/common';
import { EducationService } from 'src/entities/education/education.service';
import { EnterprisesService } from 'src/entities/enterprises/enterprises.service';
import { HeadquartersService } from 'src/entities/headquarters/headquarters.service';
import { PeopleService } from 'src/entities/people/people.service';
import { UsersService } from 'src/entities/users/users.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { EnterpriseProfile } from './entities/enterprise.profile';
import { PersonProfile } from './entities/person.profile';
import { Profile } from './entities/profile.entity';
import { User as UserModel } from 'src/entities/users/entities/user.entity';
import { SkillsService } from 'src/entities/skills/skills.service';
import { Service } from './types/service';
import { ServicesProvidedService } from 'src/entities/services-provided/services-provided.service';
import { LanguagesService } from 'src/entities/languages/languages.service';
import { InterestsService } from 'src/entities/interests/interests.service';

@Injectable()
export class ProfileService {

  constructor(
    private usersService: UsersService,
    private peopleService: PeopleService,
    private enterpriseService: EnterprisesService,
    private headquartersService: HeadquartersService,
    private educationService: EducationService,
    private skillsServices: SkillsService,
    private servicesProvidesService: ServicesProvidedService,
    private languagesService: LanguagesService,
    private interestsService: InterestsService,
  ) { }

  private async getEnterpriseProfile(user: UserModel) {
    const profile: EnterpriseProfile = new EnterpriseProfile({ username: user.username, id: user.id }, user.roleId)

    const enterprise = await this.enterpriseService.findOne(user.enterprise.id)
    profile.enterprise = profile.patchEnterprise(enterprise)

    const headquarters = await this.headquartersService.findByEnterpriseId(user.enterprise.id)


    if (headquarters) {
      headquarters.forEach(e => {
        const HQ = profile.patchHeadquarter(e)
        profile.addHeadquarter(HQ)
      })
    }

    const educations = await this.educationService.findByEnterpriseId(user.enterprise.id)

    if (educations) {
      educations.forEach(e => {
        const educ = profile.patchEducation(e)
        profile.addEducationProvided(educ)
      })

    }

    profile.patchEnterprise(enterprise)

    return profile
  }

  private async getPersonProfile(user: UserModel) {

  }
  create(createProfileDto: CreateProfileDto) {
    return 'This action adds a new profile';
  }

  async findOne(id: number) {
    const user = (await this.usersService.findOne(id))
    let profile: Profile
    if (user.enterprise) {
      delete user.person
      profile = await this.getEnterpriseProfile(user)
    }

    if (user.person) {
      delete user.enterprise
      const person = await this.peopleService.findOne(user.person.id)
      profile = new PersonProfile({ username: user.username, id: user.id }, user.roleId)

      console.log(person.toJSON())

      const educations = await this.educationService;
      const skills = person.skills;
      const servicesProvides = [];
      const languages = [];
      const interests = [];
    }
    return profile.plainObject()
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
