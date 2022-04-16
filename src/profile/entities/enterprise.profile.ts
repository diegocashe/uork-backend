import { Education } from "../types/education";
import { Enterprise } from "../types/enterprise";
import { Headquarter } from "../types/headquarters";
import { Profile } from "./profile.entity";
import { Enterprise as EnterpriseModel } from "src/entities/enterprises/entities/enterprise.entity";
import { Headquarters as HeadquartersModel } from "src/entities/headquarters/entities/headquarters.entity";
import { Education as EducationModel } from "src/entities/education/entities/education.entity";

export class EnterpriseProfile extends Profile {
    private _educationsProvided: Education[] = [];
    private _headquarters: Headquarter[] = [];
    private _enterprise: Enterprise;

    public patchEnterprise(object: EnterpriseModel): Enterprise {
        return {
            id: object.id,
            name: object.name,
            description: object.description,
            about: object.about,
            website: object.website,
            foundation: object.foundation,
            legalForm: object.legalForm?.name,
        }
    }

    public patchHeadquarter(hq: HeadquartersModel): Headquarter {
        return {
            id: hq.id,
            name: hq.name,
            isPrincipal: hq.is_principal,
            localization: {
                description: `${hq.localization.description}`,
                state: '',
                country: ''
            }
        }
    }

    public patchEducation(educ: EducationModel): Education {
        return {
            title: educ.title,
            startDate: new Date(educ.start_date),
            endDate: new Date(educ.end_date),
            level: educ.educationLevel.name,
            type: educ.educationType.name,
            scope: educ.scope.name,
            enterprise: {
                id: this._enterprise.id,
                name: this._enterprise.name,
            },
        }
    }

    public addHeadquarter(hq: Headquarter): Headquarter[] {
        this._headquarters.push(hq)
        return this._headquarters;
    }

    public addEducationProvided(educ: Education): Education[] {
        this._educationsProvided.push(educ)
        return this._educationsProvided;
    }

    public plainObject() {
        return {
            ...this.user,
            role: this.role,
            educations: this._educationsProvided,
            headquarters: this._headquarters,
            enterprise: this._enterprise,
        }
    }

    public get enterprise(): Enterprise {
        return this._enterprise;
    }
    public set enterprise(value: Enterprise) {
        this._enterprise = value;
    }

    public get educationsProvided(): Education[] {
        return this._educationsProvided;
    }
    public set educationsProvided(value: Education[]) {
        this._educationsProvided = value;
    }
    public get headquarters(): Headquarter[] {
        return this._headquarters;
    }
    public set headquarters(value: Headquarter[]) {
        this._headquarters = value;
    }
}