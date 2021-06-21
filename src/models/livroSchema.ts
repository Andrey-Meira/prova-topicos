import {model, Schema} from "mongoose";

const livroSchema = new Schema(
    {
        nome: {
            type: String,
            required: [true, "O campo NOME é obrigatório"]
        },
        isbn: {
            type: String,
            required: [true, "O campo ISBN é obrigatório"]
        },
        preco: {
            type: Number,
            required: [true, "O campo PREÇO é obrigatório"],
            min: [1, "Valor minimo de um real"]
        }
    },
    {
        timestamps: true
    }

);

export default model("livros", livroSchema);
