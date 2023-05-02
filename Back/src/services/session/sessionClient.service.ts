import { AppDataSource } from "../../data-source";
import { Repository } from "typeorm";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/AppError";
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'

export const sessionClientService = async ({email, password}) => {
    const clientRepositoy: Repository<Client> = AppDataSource.getRepository(Client);

    const clientFounded = await clientRepositoy.findOneBy({email:email});

    if(!clientFounded){
        throw new AppError('client dont exist', 403)
    }

    const passwordMatch = await compare(password, clientFounded.password)

    if(!passwordMatch){
        throw new AppError('User or password invalid', 403)
    }

    let id = clientFounded.id;

    const token:string = jwt.sign(
        {
        },
        process.env.SECRET_KEY!,
        {
            expiresIn:'24h'
        }
        );
        return {token , id}
};