import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
    width: 99vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const FormContainer = styled.form`
    width: 30%;
    background-color: var(--Grey-3);
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;

        label {
            font-size: 1rem;
            color: var(--Grey-1);
        }
        @media(max-width: 720px){
            width: 80vw;
            margin-bottom: 1rem;
        }
`
export const DivHeader = styled.div`
    width: 30%;
    padding: 1rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img {
        width: 55%;
        max-width: 10rem;
        min-width: 5rem;
    }
        @media (max-width: 720px){
            width: 80vw;
        }
`
    export const InputRegis = styled.input`
        color: var(--Grey-1);

    
        border: none;
        border: 1px solid white;
        border-radius: 4px;
    
        padding: 0.7rem 1rem;
    
        background-color: inherit;
    
`;

export const LinkVoltar = styled(Link)`
    color: white;
    padding: 0.3rem 0.5rem;
    border-radius: 4px;
    text-align:center;
    text-decoration: none;
    background-color: var(--Grey-3);
    width: 30%;
    &:hover{
        background-color: var(--Color-primary-Focus);
    }
`
export const PformandoErro = styled.p`
    color: var(--Color-primary-Focus);
`