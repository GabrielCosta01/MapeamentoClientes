/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import api from '../../services/api';
import { ButtonEntrar } from '../login/loginStyle'
import { InputRegis , FormContainer , Main , DivHeader , LinkVoltar , PformandoErro } from './registerStyle';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { TituloHeader } from '../../styles/App.style';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { iClientRequest } from '../../types';
import { registerClientSchema } from '../../serializers/registerSchema';

const Register = () => {
    const navigate = useNavigate();

    const {register, handleSubmit, formState:{errors}} = useForm<iClientRequest>({
        resolver: yupResolver(registerClientSchema)
    });

    const RegisterClientApi = async (data:iClientRequest) => {
        try {
            const response = await api.post('/client', data);
            navigate('/login') 
        } catch (error) {
            const errorRequest = error as AxiosError
            console.error(errorRequest);
        }
    };

    return(
        <Main>

            <DivHeader>
                <TituloHeader>Cadastro</TituloHeader>
                <LinkVoltar to='/login'>Voltar</LinkVoltar>
            </DivHeader>

            <FormContainer onSubmit={handleSubmit(RegisterClientApi)}>

                <label htmlFor="name">Nome</label>
                <InputRegis id='name' type="text" placeholder='Insira o nome' {...register('name')}/>
                <PformandoErro>{errors.name?.message}</PformandoErro>

                <label htmlFor="email">Email</label>
                <InputRegis id='email' type="email" placeholder='Insira o email' {...register('email')}/>
                <PformandoErro>{errors.email?.message}</PformandoErro>

                <label htmlFor="telephone">Telefone</label>
                <InputRegis id='telephone' type="number" placeholder='Insira o numero de telefone' {...register('telephone')}/>
                <PformandoErro>{errors.telephone?.message}</PformandoErro>

                <label htmlFor="password">Senha</label>
                <InputRegis id='password' type="password" placeholder='Insira a senha' {...register('password')} />
                <PformandoErro>{errors.password?.message}</PformandoErro>

                <ButtonEntrar type="submit">Entrar</ButtonEntrar>
            </FormContainer>
            

        </Main>

    )
}
export default Register