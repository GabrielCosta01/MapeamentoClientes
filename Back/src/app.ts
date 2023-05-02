import "express-async-errors";
import express from 'express';
import {handleError} from './errors/HandleError';
import cors from 'cors';
import routeClients from './routes/clientsRouter';
import sessionRouter from './routes/sessionClient.router';
import contactRoutes from './routes/contact';

export const app = express();


app.use(express.json());
app.use(cors());

app.use('', sessionRouter)
app.use('', routeClients);
app.use('/contact', contactRoutes);


app.use(handleError);