import { IContact } from ".";

export interface ICardContactProps{
    contact: IContact;
    deleteContact: (contactId: string) => Promise<void>;
}