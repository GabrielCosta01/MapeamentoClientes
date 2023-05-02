import { ICardContactProps } from '../../types/ICardContactProps';
import { CardItemLi } from './style';
import lixeira from '../../assets/lixeira.svg'

export const CardRenderItem = ({ contact, deleteContact }:ICardContactProps) => {
    return(
            <CardItemLi>
                <h4>{contact.name}</h4>
                <div>
                    <span>Identificação: {contact.id}</span>
                    <span>Email: {contact.email}</span>
                    <span>Telefone: {contact.telephone}</span>
                    <button onClick={() => deleteContact(contact.id)}><img src={lixeira} alt="" /></button>
                </div>
            </CardItemLi>
    )
}