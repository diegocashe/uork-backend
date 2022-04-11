import { Service } from "src/entities/services/entities/service.entity"
import { Education } from "../types/education"
import { Interest } from "../types/interest"
import { Language } from "../types/language"
import { Localization } from "../types/localization"
import { Skill } from "../types/skills"
import { User } from "../types/user"
import { Work } from "../types/work"
import { Profile } from "./profile.entity"

export class PersonProfile extends Profile {

    private _education: Education[];
    private _skills: Skill[];
    private _servicesProvides: Service[];
    private _languages: Language[];
    private _interests: Interest[];
    private _work: Work;
    private _localization: Localization;

    /**
     * Getter education
     * @return {Education[]}
     */
	public get education(): Education[] {
		return this._education;
	}

    /**
     * Getter skills
     * @return {Skill[]}
     */
	public get skills(): Skill[] {
		return this._skills;
	}

    /**
     * Getter servicesProvides
     * @return {Service[]}
     */
	public get servicesProvides(): Service[] {
		return this._servicesProvides;
	}

    /**
     * Getter languages
     * @return {Language[]}
     */
	public get languages(): Language[] {
		return this._languages;
	}

    /**
     * Getter interests
     * @return {Interest[]}
     */
	public get interests(): Interest[] {
		return this._interests;
	}

    /**
     * Getter work
     * @return {Work}
     */
	public get work(): Work {
		return this._work;
	}

    /**
     * Getter localization
     * @return {Localization}
     */
	public get localization(): Localization {
		return this._localization;
	}

    /**
     * Setter education
     * @param {Education[]} value
     */
	public set education(value: Education[]) {
		this._education = value;
	}

    /**
     * Setter skills
     * @param {Skill[]} value
     */
	public set skills(value: Skill[]) {
		this._skills = value;
	}

    /**
     * Setter servicesProvides
     * @param {Service[]} value
     */
	public set servicesProvides(value: Service[]) {
		this._servicesProvides = value;
	}

    /**
     * Setter languages
     * @param {Language[]} value
     */
	public set languages(value: Language[]) {
		this._languages = value;
	}

    /**
     * Setter interests
     * @param {Interest[]} value
     */
	public set interests(value: Interest[]) {
		this._interests = value;
	}

    /**
     * Setter work
     * @param {Work} value
     */
	public set work(value: Work) {
		this._work = value;
	}

    /**
     * Setter localization
     * @param {Localization} value
     */
	public set localization(value: Localization) {
		this._localization = value;
	}




}
/**
 *  
 */