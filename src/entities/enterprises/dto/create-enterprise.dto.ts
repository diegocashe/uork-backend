export class CreateEnterpriseDto {
    name: string;
    description?: string;
    about?: string;
    website?: string;
    foundation?: Date;
    userId: number
    legalFormId?: number
}
