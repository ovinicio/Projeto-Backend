import { Request, Response } from "express";
import connection from "../database/connections";

export const resultadoParcial = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {

    const competicaoId = req.params.id;

    const competicao = await connection("Competicao")
    .select("ativo")
    .where({id: competicaoId})
    .first();

    if(!competicao) {
      throw new Error("Competição não encontrada!");      
    }

    if(!competicao.ativo) {
      throw new Error("Competição ja foi encerrada!")
    }

    const resultadoParcial = await connection("Resultados")
    .select("*")
    .where({ competicao_id: competicaoId})
    .orderBy("valor", "desc")

    res.status(200).send(resultadoParcial);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
