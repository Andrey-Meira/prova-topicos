import {Request, Response} from "express";
import livroSchema from "../models/livroSchema";

class LivroController{

    //cadastrar
    async cadastrar(request: Request, response: Response){
        //console.log("teste cad");
        const novoLivro = request.body;
        var isbn = novoLivro['isbn'];
        var livroExistente = await livroSchema.findOne({isbn: isbn});
        console.log(livroExistente);
        if(livroExistente == null){
            try {
                response.status(201).json(await livroSchema.create(novoLivro));
            } catch (error) {
                response.status(400).json(error);
            }
        }else{
            response.status(400).json("Este livro já existe");
        }
    }

    //listar
    async listar(request: Request, response: Response) {
        try {
            const livro = await livroSchema.find();
            response.status(200).json(livro);
        } catch (error) {
            response.status(400).json(error);
        }    
    }

}

export {LivroController};