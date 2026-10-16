export type RegisterCredentials = { 
    username: string;
    email: string;
    password: string;
    password_confirm: string;
    firstName: string;
    lastName: string;
}

export type RegisterResponse = { 
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
}