import styled from "styled-components";

export const Header = styled.header`
    padding: 1rem 0rem;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid var(--Grey-3);
    img {
        width: auto;
    }
`
export const Main = styled.main`
    margin: 0rem 1rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    @media (max-width:720px){
        font-size: 0.7rem;
    }
`
export const Section = styled.section`
    border-bottom: 1px solid var(--Grey-3);
    width: 98vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
`
export const HeaderTechs = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    img {
        width: 0.8rem;
        height: 0.8rem;
        cursor: pointer;
    }
`
export const HeaderModal = styled.header`

    padding: 0.2rem 0.5rem;
    background-color: var(--Grey-2);

    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        background: none;
        border: none;
    }

    img {
        width: 1rem;
        height: 1rem;
    }
`
export const MainModal = styled.main`
    padding: 1rem 0rem;
    margin: 0rem 1rem;
    background-color: var(--Grey-3);
    display: flex;
    flex-direction: column;
    gap: 1rem;

    form {
        background-color: var(--Grey-3);
        display: flex;
        flex-direction: column;
        gap: 1rem; 
        
        label {
            font-size: 0.9rem;
        }

        input {
            color: white;
            border: 1px solid white;
            padding: 0.3rem 0rem;
            background-color: inherit;
        }

        select{
            padding: 0.5rem;
            color: white;
            border: 1px solid var(--Grey-2);
            border-radius: 2px;
            background-color: inherit;
            
            &:focus {
                border: none;
            }
        }
    }
    
    
`
export const SectionBody = styled.section`
    width: 80vw;
    /* border-bottom: 1px solid var(--Grey-3); */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul {
        width: 80vw;
        padding: 1.5rem 0rem;
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        list-style: none;
        gap: 1rem;

            li{
                width: 50%;
                min-width: 20rem;
                font-size: 0.9rem;
                padding: 0.5rem 1rem;
                border-radius: 4px;
                box-shadow: 1px 1px 1px 1px var(--Color-primary);
                background-color: var(--Grey-4);

                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 2rem;

                @media (max-width: 720px){
                    width:85vw;
                    min-width: 0px;
                }
                div {
                    display: flex;
                    gap: 1.4rem;

                    button {
                        cursor: pointer;
                    }
                }
            }
    }
`
export const ButtonEntrar2 = styled.button`
    color: white;
    padding: 0.5rem 0.5rem;
    border-radius: 4px;
    text-align:center;
    text-decoration: none;
    background-color: var(--Grey-4);
    width: 5%;

        &:hover{
            background-color: var(--Grey-3);
        }
`
export const ModalButtonClose = styled.img`
    padding: 0.4rem;

    &:hover{
        background-color: var(--Grey-3);
        padding: 0.4rem;
        border-radius: 4px;
    };
    
`

export const TextTitle = styled.h2`
    color: white;
`
export const TextTitle3 = styled.h3`
    color: white;
`
export const ButtonCreateContact = styled.button`
    color: green;
    width: 25rem;

    img {
        width:5rem;
        height:2rem;
    }

`
export const BoxEdit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    img{

        &:hover{
            cursor: pointer;
        }
    }
`
export const BoxProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        color: white;
    }
`