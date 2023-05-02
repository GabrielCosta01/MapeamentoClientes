import api from "../../services/api";
import CiCloseLg from '../../assets/CiCloseLg.svg'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { HomeContext } from "../../contexts/homeContext";
import { IContactRequest } from "../../types";
import { PformandoErro } from "../../pages/register/registerStyle";
import { ModalCreateContactStyled } from "./styles";
import { registerContactSchema } from "../../serializers/registerSchema";
import {  toast } from "react-toastify";
import { ButtonSubmit } from "../modalEditClient/style";


export const ModalCreateContact = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<IContactRequest>({
        resolver: yupResolver(registerContactSchema)
    })

    const {isModalOpen ,setIsModalOpen, setContact, contact, } = useContext(HomeContext)
        
    const handleModal = () => {
        setIsModalOpen(prevState => !prevState);
    };

    const createContact = async (data:any) => {
        try {
            const clientId = localStorage.getItem('id');
            const token = localStorage.getItem('token');
            
            api.defaults.headers.authorization = `Bearer ${token}`
            const response = await api.post(`/contact/${clientId}`, data)
            const newContact = response.data
            setContact([...contact, newContact])
            toast.success('Contato criado')
            handleModal()
        } catch (error) {
            console.log(error)
            toast.error('falha ao criar')
        }
    };

    return(
        <>
            <ModalCreateContactStyled isOpen={isModalOpen} onRequestClose={handleModal}>
                <div className="header">
                <h2>Novo Contato</h2>
                <button onClick={handleModal}><img src={CiCloseLg} alt="" /></button>
                </div>

                <form className='formModal' onSubmit={handleSubmit(createContact)}>

                <label htmlFor="name">Nome Completo:</label>
                <input className='inputModal'  type="text" id="name" {...register('name')} />
                {errors.name && <PformandoErro>Campo obrigatório</PformandoErro>}

                <label htmlFor="email">E-mail:</label>
                <input className='inputModal' type="email" id="email" {...register('email')} />
                {errors.email && <PformandoErro>Campo obrigatório</PformandoErro>}

                <label htmlFor="telephone">Telefone:</label>
                <input className='inputModal' type="text" id="telephone"  {...register('telephone')} />
                {errors.telephone && <PformandoErro>Campo obrigatório</PformandoErro>}

                <ButtonSubmit type="submit">Criar Contato</ButtonSubmit>

                </form>
            </ModalCreateContactStyled>
        </>
    );
};