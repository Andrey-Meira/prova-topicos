import { Router } from "express";
import {LivroController} from "../controllers/LivroController"

const router = Router();
const livroController = new LivroController();

router.post("/livro/cadastrar", livroController.cadastrar);

router.get("/livro/listar", livroController.listar);

export {router};