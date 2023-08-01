import { Request, Response } from "express";
import connection from "../database/connections";

export const resultadosCompeticoes = async (req: Request, res: Response) => {
  let errorCode = 400;

  try {

    const resultados = await connection("Resultados")
      .select("*")
      .join("Competicao", "Resultados.competicao_id", "Competicao.id");

    res.status(200).send(resultados);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
};
