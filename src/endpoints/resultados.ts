import { Request, Response } from "express"
import connection from "../database/connections"

export const resultados = async (req: Request, res: Response) => {
  let errorCode = 400
  
  try {
    const nomeAtleta = req.body.nomeAtleta;
    const valor = req.body.valor;
    const unidade = req.body.unidade;
    const competicao_id = req.body.competicao_id;

    if (!nomeAtleta || !valor || !unidade || !competicao_id) {
        throw new Error("Dados inválidos");
    }

    const competicao = await connection("Competicao")
    .select("ativo")
    .where({id: competicao_id})
    .first();
    
    if(!competicao) {
      throw new Error("Competição não encontrada!");
    }

    if(!competicao.ativo) {
      throw new Error("Não é possivel adicionar um resultado em uma competição ja finalizada!"); 
    }

    await connection("Resultados").insert({
      nomeAtleta,
      valor,
      unidade,
      competicao_id
    })

    res.status(200).send("Resultados cadastrados!")
  } catch (error: any) {
    res.status(errorCode).send({message: error.message})
  }
}