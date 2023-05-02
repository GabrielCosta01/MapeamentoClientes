import api from "../../services/api";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { HomeContext } from "../../contexts/homeContext";
import { IContactRequest } from "../../types";
import { PformandoErro } from "../../pages/register/registerStyle";
import { ButtonSubmit, ModalEditProfileStyled } from "./style";
import { registerContactSchema } from "../../serializers/registerSchema";
import { toast } from "react-toastify";
import CiCloseLg from '../../assets/CiCloseLg.svg'


export const ModalEditContact = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<IContactRequest>({
        resolver: yupResolver(registerContactSchema)
    })

    const {isModalEditClient, handleModalEditClient, setClient} = useContext(HomeContext)
        
    const editClient = async (data:any) => {
        try {
            const clientId = localStorage.getItem('id');
            const token = localStorage.getItem('token');
            
            api.defaults.headers.authorization = `Bearer ${token}`
            const response = await api.post(`/client/${clientId}`, data)
            const updateClient = response.data
            setClient(updateClient)
            toast.success('Perfil Atualizado')
            handleModalEditClient()
        } catch (error) {
            console.log(error)
            toast.error('falha ao criar')
        }

    };

    return(
        <>
            <ModalEditProfileStyled isOpen={isModalEditClient} onRequestClose={handleModalEditClient}>
                <div className="header">
                <h2>Atualizar Perfil</h2>
                <button onClick={handleModalEditClient}><img style={{cursor:'pointer'}} src={CiCloseLg} alt="" /></button>
                </div>

                <form className='formModal' onSubmit={handleSubmit(editClient)}>

                <label htmlFor="name">Nome Completo:</label>
                <input className='inputModal'  type="text" id="name" {...register('name')} />
                {errors.name && <PformandoErro>Campo obrigatório</PformandoErro>}

                <label htmlFor="email">E-mail:</label>
                <input className='inputModal' type="email" id="email" {...register('email')} />
                {errors.email && <PformandoErro>Campo obrigatório</PformandoErro>}

                <label htmlFor="telephone">Telefone:</label>
                <input className='inputModal' type="text" id="telephone"  {...register('telephone')} />
                {errors.telephone && <PformandoErro>Campo obrigatório</PformandoErro>}

                <ButtonSubmit type="submit">Atualizar</ButtonSubmit>

                </form>
            </ModalEditProfileStyled>
        </>
    );
};