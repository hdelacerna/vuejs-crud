export interface LoginForm {
    email: string;
    password: string;
}


export interface RegisterForm {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface User {
    id: string;
    email: string;
    name: string;
}
