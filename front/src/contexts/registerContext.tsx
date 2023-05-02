/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { AxiosError } from "axios";
import { iClientRequest } from "../types";



interface IRegisterContext{
    RegisterClientApi: (data:iClientRequest) => void;
}
interface IRegisterProvider{
    children: React.ReactNode
}

export const RegisterContext = createContext({} as IRegisterContext)

export const RegisterProvider = ({ children }:IRegisterProvider) => {

    const navigate = useNavigate();

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
        <RegisterContext.Provider value={{RegisterClientApi}}>
            { children }
        </RegisterContext.Provider>
    );
}