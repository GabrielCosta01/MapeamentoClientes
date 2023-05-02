/* eslint-disable @typescript-eslint/no-unused-vars */
import api from "../../services/api";
import { Main , Form , LinkButton , ButtonEntrar , DivImg} from './loginStyle';
import { useForm } from "react-hook-form";
import { InputRegis, PformandoErro } from '../register/registerStyle';
import { TituloHeader } from '../../styles/App.style';
import { LoginForm } from '../../types';
import { ToastContainer,toast } from "react-toastify";


export const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
    
    const handleLogin = async (data: LoginForm) => {
      try {  
        const response = await api.post('/login', data);
        const token = response.data.token;
        const id = response.data.id;
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        window.location.replace('/')
      } catch (error) {
        toast.error('falha no login')
        console.error(error);
      }
    };
    
    
    return (
      <Main>
        <ToastContainer/>
        <DivImg>
          <TituloHeader>Mapeie seu Cliente</TituloHeader>
        </DivImg>
            
        <Form autoComplete='off' onSubmit={handleSubmit(handleLogin)}>
                    <div>
                        <h2>Login</h2>
                    </div>
                    <label htmlFor="email">Email</label>
                    <InputRegis id='email' type="email" {...register('email')} />
                    <PformandoErro>{errors.email?.message}</PformandoErro>

                    <label htmlFor="password">Senha</label>
                    <InputRegis id='password' type="password" {...register('password')} />
                    <PformandoErro>{errors.password?.message}</PformandoErro>

                    <ButtonEntrar type="submit">Entrar</ButtonEntrar>
                    
                    <div>
                        <span>ainda não é cadastrado?</span>
                        <LinkButton to='/register'>Cadastro</LinkButton>
                    </div>
                </Form>
            </Main>
    );
};