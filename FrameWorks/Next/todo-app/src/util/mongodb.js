import mongoose from "mongoose";

const connectMongo = async () =>{
    mongoose.connect(process.env.DATABASE_URL) //estabelecer a conexão com o mongo
        .then(()=>console.log("Conecta ao MongoDB"))
        .catch(err => console.error("Erro ao conectar ao MongoDB", err))
}

export default connectMongo;