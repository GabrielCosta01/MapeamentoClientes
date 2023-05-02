import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { createContactService, deleteContactService, getAllContactsService, updateContactService } from '../../services/contact/contact.service';

export const getAllContactsController = async (req:Request, res:Response) => {
  const listContacts = await getAllContactsService();
  return res.status(200).json(listContacts);
};


export const createContactController = async (req:Request, res:Response) => {
  const newContactData = req.body;
  const clientId:string = req.params.id;
  const newContact = await createContactService(clientId,newContactData);
  console.log(newContact);
  
  return res.status(201).json(newContact);
};

export const updateContactController = async (req:Request, res:Response) => {
  const contactId:string = req.params.id;
  const updatedContactData:object = req.body;
  const updatedContact = await updateContactService(contactId, updatedContactData);
  if (!updatedContact) {
    throw new AppError('Client not found', 404);
  }
  return res.status(200).json(updatedContact);
};

export const deleteContactController = async (req:Request, res:Response) => {
  const contactId:string = req.params.id;
  const deletedContact = await deleteContactService(contactId);

  return res.status(200).json(deletedContact);
};
