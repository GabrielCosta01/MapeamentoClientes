import api from '../services/api';
import { createContext, useEffect, useState } from 'react';
import { IClient, IContact } from '../types';

interface IHomeContext {
    client: IClient | null;
    setClient: React.Dispatch<React.SetStateAction<IClient | null>>;
    contact: IContact[];
    setContact: React.Dispatch<React.SetStateAction<IContact[] | []>>;
    loading: boolean;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isModalEditClient: boolean;
    setIsModalEditClient: React.Dispatch<React.SetStateAction<boolean>>;
    handleModalEditClient: () => void;
}

interface IHomeProvider{
    children: React.ReactNode
}

export const HomeContext = createContext({} as IHomeContext);

export const HomeProvider = ({ children }:IHomeProvider) => {

    const [client, setClient] = useState<IClient | null>(null);
    const [contact, setContact] = useState<IContact[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalEditClient, setIsModalEditClient] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const clientId = localStorage.getItem('id');
        const token = localStorage.getItem('token');

        if(clientId !== null){
            const loadingClient = async (clientId:string) => {

                api.defaults.headers.authorization = `Bearer ${token}`
                const response = await api.get(`/client/${clientId}`);
                const client = response.data;
                
                setClient(client);
                setContact(client.contacts);
            };
            loadingClient(clientId);
        }
        setLoading(false)
    },[])

    const handleModalEditClient = () => {
        setIsModalEditClient(prevState => !prevState);
    };

    return(
        <HomeContext.Provider value={{client, setClient,contact,setContact,loading,isModalOpen,setIsModalOpen,isModalEditClient,setIsModalEditClient,handleModalEditClient}}>
            {children}
        </HomeContext.Provider>
    )
};