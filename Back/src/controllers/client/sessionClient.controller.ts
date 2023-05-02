import {Request, Response} from 'express';
import { sessionClientService } from '../../services/session/sessionClient.service';

interface ISessionRequest{
    email: string;
    password: string;
}

export const sessionClientController = async (req:Request, res:Response) => {
    const sessionData:ISessionRequest = req.body;
    const token = await sessionClientService(sessionData);
    return res.status(201).json(token)
};