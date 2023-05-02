import { Request, Response } from 'express';
import { AppError } from '../../errors/AppError';
import { getAllClientsService, getClientByIdService, createClientService, updateClientService, deleteClientService, getAllContactByIdService } from '../../services/client/ClientService';

export const getAllClientsController = async (req:Request, res:Response) => {
  const listClients = await getAllClientsService();
  return res.status(200).json(listClients);
};

export const getClientByIdController = async (req:Request, res:Response) => {
  const clientId:string = req.params.id;
  const client = await getClientByIdService(clientId);
  if (!client) {
    throw new AppError('Client not found', 404);
  }
  return res.status(200).json(client);
};

export const createClientController = async (req:Request, res:Response) => {
  const newClientData = req.body;
  const newClient = await createClientService(newClientData);
  return res.status(201).json(newClient);
};

export const updateClientController = async (req:Request, res:Response) => {
  const clientId:string = req.params.id;
  const updatedClientData:object = req.body;
  const updatedClient = await updateClientService(clientId, updatedClientData);
  if (!updatedClient) {
    throw new AppError('Client not found', 404);
  }
  return res.status(200).json(updatedClient);
};

export const deleteClientController = async (req:Request, res:Response) => {
  const clientId:string = req.params.id;
  const deletedClient = await deleteClientService(clientId);
  if (!deletedClient) {
    throw new AppError('Client not found', 404);
  }
  return res.status(200).json(deletedClient);
};

export const getAllContactByIdController = async (req:Request, res:Response) => {
  const clientId:string = req.params.id;
  const contacts = await getAllContactByIdService(clientId);
  return res.status(200).json(contacts);
};