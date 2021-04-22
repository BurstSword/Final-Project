export interface ResponseUser{
    status: number,
    message: string,
    user: User,
    token?:string,
    error?:string
}

export interface User{
    _id:string,
    username: string,
    email?: string,
    password: string,
}