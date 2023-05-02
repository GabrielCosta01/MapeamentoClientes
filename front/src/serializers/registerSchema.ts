import * as yup from "yup";

export const registerClientSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Insira um email válido').required('Email é obrigatório'),
    password: yup.string().required('Senha é obrigatória'),
    telephone: yup.string().required('Telefone é obrigatório'),
});

export const registerContactSchema = yup.object({
    name: yup.string().required('campo nome é obrigatorio'),
    email: yup.string().email('formato de email incorreto').required('campo email é obrigatorio'),
    telephone: yup.string().required('campo telefone é obrigatorio')
})