export type Person = {
    id: number,
    firstName: string,
    lastName: string,
    email?: string,
    //optional values
    lastAccess?: string | Date,
    phone?: string,
    mobile?: string,
    city?: string,
    zip?: string,
    code?: string,
    birthday?: string | Date,
    passport?: string,
    photo?: string,
    ci?: string,
    rate?: number,
}