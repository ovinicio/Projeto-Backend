import { Request, Response } from "express";
import connection from "../database/connections";

export const criarCompeticao = async (req: Request, res: Response) => {
    let errorCode = 400;

    try {
        const nome = req.body.nome;
        const dataInicio = req.body.dataInicio;
        const dataFim = req.body.dataFim;

        if (!nome || !dataInicio || !dataFim) {
            throw new Error("Dados inválidos");            
        } 
        await connection("Competicao").insert({
            nome,
            dataInicio,
            dataFim
        })
        res.status(200).send("Competição criada com sucesso!")
    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    }
}