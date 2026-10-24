export type RegisterCredentials = { 
    username: string;
    email: string;
    password: string;
    password_confirm: string;
    firstName: string;
    lastName: string;
}

export type LoginCredentials = {
    email: string;
    password: string;
}

export type LoginResponse = {
    access: string;
    refresh: string;
}