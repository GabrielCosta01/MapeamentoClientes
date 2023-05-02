import 'react-toastify/dist/ReactToastify.css';
import ReactModal from "react-modal";
import profile from '../../assets/profile.svg'
import iconAdd from '../../assets/iconAdd.svg'
import api from '../../services/api';
import { Header , Main , Section , HeaderTechs, SectionBody, TextTitle, ButtonCreateContact, TextTitle3, BoxEdit, BoxProfile} from './dashboardStyle'
import { ToastContainer, toast} from 'react-toastify';
import { ButtonEntrar2 } from './dashboardStyle';
import { useContext } from 'react';
import { HomeContext } from '../../contexts/homeContext';
import { CardRenderItem } from '../../components/cardContact/cardContact';
import { ModalCreateContact } from '../../components/modalContact/modalContact';
import { ModalEditContact } from '../../components/modalEditClient/modalEditClient';

ReactModal.setAppElement('#root');

export const DashboardPage = () => {
    const { client, setClient, contact, setContact, setIsModalOpen, handleModalEditClient} = useContext(HomeContext);

    const replaceLogin = () => {
        localStorage.clear();
        setClient(null);
        window.location.replace('/login');
    }

    const handleModalCreateContact = () => {
        setIsModalOpen(prevState => !prevState);
    };

    const deleteContact = async (contactId:string) => {
        try {
            const token = localStorage.getItem('token');
            
            api.defaults.headers.authorization = `Bearer ${token}`
            const response = await api.delete(`/contact/${contactId}`)
            
            const contactFiltered = contact.filter((contact) => contact.id !== contactId)

            setContact(contactFiltered)
            toast.success('Contato deletado')
        } catch (error) {
            console.log(error)
            toast.error('falha ao deletar')
        }
    };
    
    return(
        <>
            <ToastContainer />
                <Header>
                    <TextTitle>Mapeamento Clientes</TextTitle>
                    <ButtonEntrar2 onClick={replaceLogin}>Sair</ButtonEntrar2>
                </Header>

                <Main>

                    <Section>
                        <BoxEdit>
                            <TextTitle3>Seja bem-vindo {client?.name}!</TextTitle3>
                            <BoxProfile>
                                <button onClick={handleModalEditClient}>
                                    <img src={profile} alt='foto perfil'></img> 
                                </button>
                                <span>Editar</span>
                            </BoxProfile>
                        </BoxEdit>
                        <div>
                            <TextTitle3>Nome: {client?.name}</TextTitle3>
                            <TextTitle3>Email: {client?.email}</TextTitle3>
                            <TextTitle3>Telefone: {client?.telephone}</TextTitle3>
                        </div>
                    </Section>

                    <SectionBody>
                        <HeaderTechs>
                            <TextTitle>Contatos</TextTitle>
                            <ButtonCreateContact onClick={handleModalCreateContact}>
                                <img src={iconAdd} alt='icone de adicionar'></img> 
                            </ButtonCreateContact>


                        </HeaderTechs>

                    <ModalCreateContact  />
                    <ModalEditContact />

                    {
                        contact ? (
                            contact.length ? (
                                <ul>
                                    {
                                        contact.map(contact => (
                                            <CardRenderItem key={contact.id} contact={contact} deleteContact={deleteContact} />
                                        ))
                                    }
                                </ul>
                            ) : <p>Nenhum contato encontrado.</p>
                        ) : null
                    }
                    </SectionBody>
                </Main>
        </>
    )
};