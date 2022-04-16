import { PartialType } from '@nestjs/mapped-types';
import { CreatePeopleEducationDto } from './create-people-education.dto';

export class UpdatePeopleEducationDto extends PartialType(CreatePeopleEducationDto) {}
