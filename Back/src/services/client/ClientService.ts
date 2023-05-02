import { hashSync } from 'bcrypt';
import { AppDataSource } from '../../data-source';
import { Client } from '../../entities/client.entity';
import { Contact } from '../../entities/contact.entity';
import { AppError } from '../../errors/AppError';
import { contactOutputSchema } from '../../seriallizers/contacts/contact.serializer';
import { IClientRequest, IClientUpdate } from '../../types/client';
import { clientReturnedSchema } from '../../seriallizers/clients/client.serializer';

export const getAllClientsService = async () => {
  const clientRepository = AppDataSource.getRepository(Client);
  const listClients = await clientRepository.find({
    relations:{
      contacts:true
    }
  });
  return listClients;
};

export const getClientByIdService = async (clientId: string) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOne({
    where: {
      id: clientId,
    },
    relations: {
      contacts: true,
    },
  });

  return client;
};

export const createClientService = async (newClientData: IClientRequest) => {
  const clientRepository = AppDataSource.getRepository(Client);
  
  const clientFounded = await clientRepository.findOneBy({email:newClientData.email});

  if (clientFounded) {
    throw new AppError('Client already exists!', 409);
  };
  
  const newClient = clientRepository.create(newClientData);

  await clientRepository.save(newClient);

  const contactTrated = await contactOutputSchema.validate(newClient, {
    stripUnknown:true
  })

  return contactTrated;
};


export const updateClientService = async (clientId: string, updatedClientData: IClientUpdate) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const existingClient = await clientRepository.findOneBy({id:clientId});
  if (!existingClient) {
    return undefined;
  }

  const clientDataValidated = Object.keys(updatedClientData)
  if(
    clientDataValidated.includes("id") ||
    clientDataValidated.includes("createdAt") ||
    clientDataValidated.includes("contacts")
  ){
    throw new AppError('Change not allowed!', 401)
  };

  if(updatedClientData.password){
    updatedClientData.password = hashSync(updatedClientData.password, 10);
  }

  const updatedClient = clientRepository.create({
    ...existingClient,
    ...updatedClientData 
  }) 

  await clientRepository.save(updatedClient);

  const updatedClientOutput = await clientReturnedSchema.validate(updatedClient,{
    stripUnknown:true
  })

  return updatedClientOutput;
};

export const deleteClientService = async (clientId: string) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const existingClient = await clientRepository.findOneBy({id:clientId});
  if (!existingClient) {
    return undefined;
  }
  const deletedClient = await clientRepository.remove(existingClient);
  return deletedClient;
};

export const getAllContactByIdService = async (clientId: string) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const contactRepository = AppDataSource.getRepository(Contact);
  const client = await clientRepository.findOneBy({id:clientId});
  if (!client) {
    return undefined;
  }

  const listContact = await contactRepository.find({
    where: { client:{id:clientId} },
    relations: ['clients'],
  });
  
  return listContact;
};
