import * as yup from "yup";
import { Schema } from "yup";
import { IContact, IContactRequest } from "../../types/contact";

export const contactRequestSchema: Schema<any> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.string().required(),
});

export const contactOutputSchema: Schema<any> = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    email: yup.string().email(),
    telephone: yup.string(),
    createdAt: yup.date(),
});

export const updateContactSchema: Schema<any> = yup.object().shape({
    id: yup.string(),
    name: yup.string(),
    email: yup.string().email(),
    telephone: yup.string(),
    createdAt: yup.date(),
});