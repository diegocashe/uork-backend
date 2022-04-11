import { PartialType } from '@nestjs/mapped-types';
import { CreateLanguagePersonDto } from './create-language-person.dto';

export class UpdateLanguagePersonDto extends PartialType(CreateLanguagePersonDto) {}
