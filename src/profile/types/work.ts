import { Enterprise } from "./enterprise"
import { Headquarter } from "./headquarters"

export type Work = {
    id: number,
    description?: string,
    position:string,
    headquarter:Headquarter
    enterprise:Enterprise
}