import { PartialType } from '@nestjs/mapped-types';
import { CreateEnterprisesLegalFormDto } from './create-enterprises-legal-form.dto';

export class UpdateEnterprisesLegalFormDto extends PartialType(CreateEnterprisesLegalFormDto) {}
