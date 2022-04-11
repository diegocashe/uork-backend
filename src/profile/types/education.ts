
export type Education = {
    title:string,
    startDate:Date,
    endDate:Date,
    level:string,
    type:string,
    scope:string,
    enterprise:{
        id:number,
        name:string
    }
}
