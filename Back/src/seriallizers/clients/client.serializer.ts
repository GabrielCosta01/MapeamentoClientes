import * as yup from "yup";
import { Schema } from "yup";
import { contactOutputSchema } from "../contacts/contact.serializer";

export const clientSchema: Schema<any> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    telephone: yup.string().required(),
})

export const clientReturnedSchema: Schema<any> = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    email: yup.string().email(),
    telefone: yup.string(),
    createdAt: yup.date(),
    contacts: yup.array(contactOutputSchema),
});

export const updateClientSchema: Schema<any> = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string(),
    telephone: yup.string(),
    createdAt: yup.date(),
});

