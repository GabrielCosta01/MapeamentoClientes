import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`
export const DivImg = styled.div`
    width: 90%;
    margin-top:1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: auto;
    }
`
export const Form = styled.form`
    width: 30%;
    border-radius: 4px;
    background-color: var(--Grey-3);
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

        label {
            color: var(--Grey-1);
        }

        div {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        @media (max-width: 720px){
            width: 85vw;
        }
`
export const LinkButton = styled(Link)`
    color: white;
    padding: 0.7rem 0.5rem;
    border-radius: 4px;
    text-align:center;
    text-decoration: none;
    background-color: var(--Grey-2);
    width: 97%;

        &:hover{
            background-color: var(--Color-primary-Focus);
        }
`
export const ButtonEntrar = styled.button`
    color: white;
    padding: 0.7rem 0.5rem;
    border-radius: 4px;
    text-align:center;
    text-decoration: none;
    background-color: var(--Grey-2);
    width: 100%;

        &:hover{
            background-color: var(--Color-primary-Focus);
        }
`