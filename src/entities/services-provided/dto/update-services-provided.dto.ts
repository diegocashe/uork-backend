import { PartialType } from '@nestjs/mapped-types';
import { CreateServicesProvidedDto } from './create-services-provided.dto';

export class UpdateServicesProvidedDto extends PartialType(CreateServicesProvidedDto) {}
