
export interface IClientRequest{
    name:string;
    email:string;
    password:string;
    telephone:string;
}

export interface IClient{
    id:string;
    name:string;
    email:string;
    password:string;
    telephone:string;
    createdAt: Date;
}

export interface IClientUpdate{
    name?:string;
    email?:string;
    password?:string;
    telephone?:string;
}