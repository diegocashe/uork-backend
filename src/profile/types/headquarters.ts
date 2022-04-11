import { Localization } from "./localization"

export type Headquarter = {
    id?:number,
    name:string,
    isPrincipal:boolean,
    localization?:Localization
}