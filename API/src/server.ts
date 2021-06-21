// Importa a biblioteca express e request/response do Express
import express, { Request, Response } from "express";

// Importa o nosso arquivo de rotas (routes.ts) que criamos dentro de /config
import { router } from './config/routes';

// Importa a biblioteca mongoose criada em database.ts
import { mongoose } from './config/database';
import cors from "cors";

const db = mongoose;

// Cria um app/instancia um objeto express() e importa as funcs do Express
const app = express();

// Libera o acesso CORS para outros domínios
app.use(cors());

// Pega o corpo do nosso POST
app.use(express.json());

// Pega o arquivo das rotas
app.use(router);

// Abre conexão com o servidor, na porta 3000
app.listen(3000, () => {
  console.log("O servidor está rodando...");
});