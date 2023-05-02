import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors/AppError';
import { contactOutputSchema } from '../../seriallizers/contacts/contact.serializer';
import { IContactUpdate } from '../../types/contact';

interface ContactRequest{
  nomeCompleto: string;
  email: string;
  telefone: string;
}

export const getAllContactsService = async () => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find();
  return contacts;
};

export const createContactService = async (clientId: string, newContactData: ContactRequest) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const contactRepository = AppDataSource.getRepository(Contact);

  const client = await clientRepository.findOneBy({id:clientId});
  if (!client) {
    throw new AppError('Client not found', 404);
  }

  const newContact = contactRepository.create(newContactData);
  newContact.client = client;

  await contactRepository.save(newContact);

  const contactOutput = await contactOutputSchema.validate(newContact, {
    stripUnknown:true
  });

  return contactOutput
};
export const updateContactService = async (contactId:string, updatedContactData:IContactUpdate) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const existingContact = await contactRepository.findOneBy({id:contactId});
  if (!existingContact) {
    return undefined;
  }
  const updatedClient = Object.assign(existingContact, updatedContactData);
  await contactRepository.save(updatedClient);
  return updatedClient;
};

export const deleteContactService = async (contactId:string) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const existingContact = await contactRepository.findOneBy({id:contactId});
  if (!existingContact) {
    throw new AppError('contact not exist', 404)
  }
  const deletedContact = await contactRepository.remove(existingContact);
  return deletedContact;
};