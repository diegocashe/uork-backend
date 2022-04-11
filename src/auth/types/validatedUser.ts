export type ValidatedUser = {
    id: number,
    username: string,
    // password: string,
    ip: string,
    isActive: boolean,
    roleId: number,
    createdAt: Date|string,
    updatedAt: Date|string,
}