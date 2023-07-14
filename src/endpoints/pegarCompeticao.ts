import { Request, Response } from "express";
import connection from "../database/connections";

export const pegarCompeticao = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
       const competicoes = await connection.select('*').from('Competicao');

        res.status(200).send(competicoes)

    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    }
}