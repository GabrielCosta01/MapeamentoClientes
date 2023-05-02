import { Router } from "express";
import { createContactController, deleteContactController, getAllContactsController, updateContactController } from "../controllers/contact/contact.controller";
import { ensureAuthClientMiddleware } from "../middleware/ensureClientAuthenticade.middleware";

const contactRoutes = Router();

contactRoutes.post('/:id', ensureAuthClientMiddleware, createContactController);
contactRoutes.get('', ensureAuthClientMiddleware, getAllContactsController);
contactRoutes.patch('/:id', ensureAuthClientMiddleware, updateContactController);
contactRoutes.delete('/:id', ensureAuthClientMiddleware, deleteContactController);

export default contactRoutes;