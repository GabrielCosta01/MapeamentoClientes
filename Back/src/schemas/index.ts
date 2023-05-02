import * as yup from 'yup';
import { Schema} from 'yup';
import { IClientBody } from '../services/client/ClientService'

export const clientDataRequestSchema:Schema<IClientBody> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    telephone: yup.string().required(),

    contact: yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
        telephone: yup.string().required(),    
    })
})