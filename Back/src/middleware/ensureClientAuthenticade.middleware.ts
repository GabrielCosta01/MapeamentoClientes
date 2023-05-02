import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';

export const ensureAuthClientMiddleware = async (req:any, res:Response, next:NextFunction) => {
    const authToken: string = req.headers.authorization;

    if(!authToken) throw new AppError("Missing header authorization", 403);

    const token: string = authToken.split(" ")[1];

    return jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if(err) res.status(401).json({message: err.message});

        console.log(decoded);
        
        req.client = {
            id: String(decoded.sub)
        }

        return next();
    })
};
