export class CreateUserDto {
    username: string;
    password: string;
    ip?: string;
    isActive?: boolean;
    roleId?: number
}
