import { Global, Module } from '@nestjs/common';
import { CountriesModule } from './countries/countries.module';
import { EducationLevelsModule } from './education-levels/education-levels.module';
import { EducationTypesModule } from './education-types/education-types.module';
import { EducationModule } from './education/education.module';
import { EnterprisesLegalFormsModule } from './enterprises-legal-forms/enterprises-legal-forms.module';
import { EnterprisesModule } from './enterprises/enterprises.module';
import { EntitiesService } from './entities.service';
import { HeadquartersModule } from './headquarters/headquarters.module';
import { InterestsModule } from './interests/interests.module';
import { JobVacanciesModule } from './job-vacancies/job-vacancies.module';
import { JobVacancyProfitsModule } from './job-vacancy-profits/job-vacancy-profits.module';
import { LanguageLevelsModule } from './language-levels/language-levels.module';
import { LanguagePeopleModule } from './language-people/language-people.module';
import { LanguagesModule } from './languages/languages.module';
import { LocalizationsModule } from './localizations/localizations.module';
import { ModalitiesModule } from './modalities/modalities.module';
import { PeopleSkillsModule } from './people-skills/people-skills.module';
import { PeopleModule } from './people/people.module';
import { PositionsModule } from './positions/positions.module';
import { PostulationsModule } from './postulations/postulations.module';
import { ProfitsModule } from './profits/profits.module';
import { PublicationsModule } from './publications/publications.module';
import { RolesModule } from './roles/roles.module';
import { SchedulesModule } from './schedules/schedules.module';
import { ScopesModule } from './scopes/scopes.module';
import { ServicesProvidedModule } from './services-provided/services-provided.module';
import { ServicesModule } from './services/services.module';
import { SkillsModule } from './skills/skills.module';
import { StatesModule } from './states/states.module';
import { UsersModule } from './users/users.module';
import { WorkersModule } from './workers/workers.module';
// import { RolesModule } from './roles/roles.module';
// import { UsersModule } from './users/users.module';
// import { PublicationsModule } from './publications/publications.module';
// import { EnterprisesModule } from './enterprises/enterprises.module';
// import { EnterprisesLegalFormsModule } from './enterprises-legal-forms/enterprises-legal-forms.module';
// import { HeadquartersModule } from './headquarters/headquarters.module';
// import { WorkersModule } from './workers/workers.module';
// import { SchedulesModule } from './schedules/schedules.module';
// import { ModalitiesModule } from './modalities/modalities.module';
// import { InterestsModule } from './interests/interests.module';
// import { PostulationsModule } from './postulations/postulations.module';
// import { JobVacanciesModule } from './job-vacancies/job-vacancies.module';
// import { PositionsModule } from './positions/positions.module';
// import { SkillsModule } from './skills/skills.module';
// import { PeopleSkillsModule } from './people-skills/people-skills.module';
// import { ScopesModule } from './scopes/scopes.module';
// import { ServicesModule } from './services/services.module';
// import { ServicesProvidedModule } from './services-provided/services-provided.module';
// import { LanguagesModule } from './languages/languages.module';
// import { LanguageLevelsModule } from './language-levels/language-levels.module';
// import { LanguagePeopleModule } from './language-people/language-people.module';
// import { EducationModule } from './education/education.module';
// import { EducationTypesModule } from './education-types/education-types.module';
// import { EducationLevelsModule } from './education-levels/education-levels.module';
// import { PeopleModule } from './people/people.module';
// import { JobVacancyProfitsModule } from './job-vacancy-profits/job-vacancy-profits.module';
// import { ProfitsModule } from './profits/profits.module';
// import { LocalizationsModule } from './localizations/localizations.module';
// import { StatesModule } from './states/states.module';
// import { CountriesModule } from './countries/countries.module';
import { PeopleEducationModule } from './people-education/people-education.module';

const modules = [
  RolesModule,
  UsersModule,
  PublicationsModule,
  EnterprisesModule,
  EnterprisesLegalFormsModule,
  HeadquartersModule,
  WorkersModule,
  SchedulesModule,
  ModalitiesModule,
  InterestsModule,
  PostulationsModule,
  JobVacanciesModule,
  PositionsModule,
  SkillsModule,
  PeopleSkillsModule,
  ScopesModule,
  ServicesModule,
  ServicesProvidedModule,
  LanguagesModule,
  LanguageLevelsModule,
  LanguagePeopleModule,
  EducationModule,
  EducationTypesModule,
  EducationLevelsModule,
  PeopleModule,
  JobVacancyProfitsModule,
  ProfitsModule,
  LocalizationsModule,
  StatesModule,
  CountriesModule,
  PeopleEducationModule
]

@Global()
@Module({
  imports: modules,
  exports: modules,
  // controllers: [EntitiesController],
  providers: [EntitiesService]
})
export class EntitiesModule {}
