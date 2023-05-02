export interface IClient {
  id:string;
  name: string;
  email: string;
  password: string;
  telephone: string;
  createdAt: Date;
};

export interface iClientRequest{
  name: string;
  email: string;
  password: string;
  telephone: string;
};

export interface IClientUpdate{
  name?: string;
  email?: string;
  password?: string;
  telephone?: string;
};

export interface IContact {
  id:string;
  name: string;
  email: string;
  password: string;
  telephone: string;
  createdAt: Date;
};

export interface IContactRequest{
  name: string;
  email: string;
  telephone:string;
};  

export interface LoginForm {
  email: string;
  password: string;
};

export type ModalProps = {
  isOpen: boolean;
  onRequestClose: () => any;
};
