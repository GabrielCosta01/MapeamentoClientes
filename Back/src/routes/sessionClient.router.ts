import {Router} from 'express';
import { sessionClientController } from '../controllers/client/sessionClient.controller';

const sessionRouter = Router();

sessionRouter.post('/login', sessionClientController );

export default sessionRouter;