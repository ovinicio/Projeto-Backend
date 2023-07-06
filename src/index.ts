import express from "express";
import cors from "cors";
import dotenv from 'dotenv'

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

const competicoes = []
app.post('/competicao', (req, res) => {
    const { nome, dataInicio, dataFim } = req.body

    const competicao = {
        nome,
        dataInicio,
        dataFim
    }

    competicoes.push(competicao)

    res.status(201).json(competicao)
})

const resultados = []
app.post('/competicao/resultados', (req, res) => {
    const { competicao, atleta, value, unidade } = req.body

    const resultado = {
        competicao,
        atleta,
        value,
        unidade
    }

    resultados.push(resultado)

    return res.status(201).json(resultado)
})


