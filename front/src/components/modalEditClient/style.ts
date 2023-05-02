import ReactModal from "react-modal";
import styled from "styled-components";

export const ModalEditProfileStyled = styled(ReactModal)`

    background-color: var(--Grey-3);
    color: white;
    padding: 2rem;
    width: 100%;
    max-width: 520px;
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius:8px;
    display:flex;
    flex-direction:column;
    margin-top:10px;

    button{
        color: white;
    }

    .container_modal_items{
        width:100%;
        padding:12px 20px;
        gap:10px;
        display:flex;
        flex-direction:column;
        justify-content:center;

        .close_modal {
            display:flex;
            justify-content:space-between;

            button{
                font-size:20px;
                background-color: transparent;
                border:transparent;
                color: var(--grey4);
            }
        }

        p{
            font-size: 14px;
            padding: 18px 0 24px;
        }
    }

    .input_modal{
        display:flex;
        flex-direction:column;
        gap:8px;
        padding-bottom: 20px;

        input{
            padding: 0px 16px;
            outline:none;
            border: 1.5px solid var(--grey7);
            height:40px;
            border-radius: 4px; 
        }

        .brand1-btn {
            width: 30%;
            height: 38px;
        }
    }

    .input_description{
        display:flex;
        flex-direction:column;
        gap:8px;

        textarea{
            resize:none;
            border-radius:4px;
            border: 1.5px solid var(--grey7);
            padding:10px;
            outline:none;
            overflow: hidden;
        }
    }

    .button_actions{
        display:flex;
        gap:10px;
        justify-content:flex-end;
        padding-top: 18px;

        button{
            padding: 12px 20px;
            font-weight: 600;
            font-size: 16px;
            border-radius:4px;
        }

        a{
            padding: 12px 20px;
            font-weight: 600;
            font-size: 16px;
            border-radius:4px;
            cursor: pointer;
        }
        
        #save{
            color: var(--brand4);
            border:transparent;
            
            &:hover{
                background-color: var(--brand2);
                opacity:0.7;
                transition:0.3s;
            }
        }
    }

    @media (max-width:400px) {

        width: 90%;

        input {
            max-width: 80%;
        }

        .aditional_inputs {
            width: 150px;
        }

        .side {
            gap: 0px;
        }
    }
`
export const ButtonSubmit = styled.button`
    color: white;
    margin: 0 auto;
    background-color: var(--Color-primary);
    width: 9rem;
    padding-top:1rem;
    padding-bottom:1rem;
    border-radius: 2rem;
    cursor: pointer;

    &:hover{
        background-color: var(--Color-primary-Focus);
    }

`