import {Router} from 'express';
import { getAllClientsController, getClientByIdController, createClientController, updateClientController, deleteClientController, getAllContactByIdController } from '../controllers/client/Client.controller';
import { ensureAuthClientMiddleware } from '../middleware/ensureClientAuthenticade.middleware';

const routeClient = Router();

routeClient.post("/client", createClientController);
routeClient.get("/client", ensureAuthClientMiddleware, getAllClientsController);
routeClient.get("/client/:id", ensureAuthClientMiddleware, getClientByIdController);
routeClient.post("/client/:id", ensureAuthClientMiddleware, updateClientController);
routeClient.delete("/client/:id", ensureAuthClientMiddleware, deleteClientController);


export default routeClient;
