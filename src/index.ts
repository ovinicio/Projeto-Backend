import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
import { criarCompeticao } from "./endpoints/criarCompeticao";
import { pegarCompeticao } from "./endpoints/pegarCompeticao";
import { resultados } from "./endpoints/resultados";
import { finalizarCompeticao } from "./endpoints/finalizarCompeticao";

dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
  })


  app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.post('/competicao', criarCompeticao);

app.get('/competicao', pegarCompeticao);

app.post('/competicao/resultados', resultados)

app.put('/competicao/:id', finalizarCompeticao)


