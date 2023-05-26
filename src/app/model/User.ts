
export class User {
    email?: string;
    password?: string;
}

export class UserRegistration {
    firstName?: string;
    lastName?: string;
    loginName?: string;
    password?: string;
    email?: string;
}

export class UserUpdate {
    userId?: number;
    firstName?: string;
    lastName?: string;
    password?: string;
}