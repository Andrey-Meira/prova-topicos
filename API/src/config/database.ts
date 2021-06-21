import mongoose from "mongoose";

mongoose.connect(
    'mongodb+srv://admin:admin@clustertopicos.ljyrp.mongodb.net/ProvaTopicos?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => {
    console.log("Aplicação conectada ao banco");
})
.catch((error) => {
    console.log(`Erro ao conectar ao banco: ${error}`);
});

export{mongoose};