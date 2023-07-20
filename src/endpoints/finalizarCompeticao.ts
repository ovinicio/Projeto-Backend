import { Request, Response } from "express";
import connection from "../database/connections";

export const finalizarCompeticao = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {
    const competicaoId = req.params.id;

    const competicao = await connection("Competicao")
      .select("*")
      .where({ id: competicaoId })
      .first();

    if (!competicao) {
      throw new Error("Competição não encontrada!");
    }

    if (!competicao.ativo) {
      throw new Error("Competição já finalizada!");
    }

    await connection("Competicao")
      .where({ id: competicaoId })
      .update({ ativo: false });

    res.status(200).send("Competição finalizada com sucesso!");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
