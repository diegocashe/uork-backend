import { Json } from "sequelize/types/utils"
import { Skill } from "src/entities/skills/entities/skill.entity"
import { Education } from "../types/education"
import { Enterprise } from "../types/enterprise"
import { User } from "../types/user"

/**
 * deberian ser propiedades privadas y gettersd y setters pero no tengo tiempo xd
 */

export class Profile {
    private _user: User
    private _role: number

    constructor(user: User, userType: number) {
        this._user = user
        this._role = userType
    }

    static createProfile(userData: User, userType: number): Profile {
        return new Profile(userData, userType)
    }

    public plainObject() {};

    public toJSON() {
        return JSON.stringify(this.plainObject())
    }

    protected set user(user: User) {
        this._user = user
    }

    protected get user() {
        return this._user
    }

    protected set role(role: number) {
        this._role = role
    }

    protected get role() {
        return this._role
    }


}

