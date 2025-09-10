

// Pega a String de Conexão nas Variaveis de Ambente do Projeto(Environment)

import mongoose from "mongoose";
import { cache } from "react";

//transforma texto em uma endereço URL (URI)
const MONGODB_URI = process.env.DATABASE_URL;

if (!MONGODB_URI) {
    throw new Error("Defina o DATABASE_URL no .env.local");
}

// cache do sistema (mongoose), armazenar a as conexões já estabelecidads
let cached = (global as any).mongoose;

//se cached não existir (primeira vez que acesso ao site)
if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectMongo() {
    //Verificar se Conexão já existe, se já existe retorna a propria conexão
    if (cached.conn) return cached.conn;
    // verficiar se nn existe uma promessa de conexão em andamento
    if (!cached.promise) { // isso é nulo?
        const aguard = { bufferCommands: false };
        // crio uma promise ( promeça de conexão) 
        cached.promise = mongoose.connect(MONGODB_URI!, aguard)
            .then((mongoose) => {
                console.log("Conectado ao Mongo");
                return mongoose
            });
    }


    // aguardar a conexão ser criada

    try {
        // cria a conexão a partir da promessa que estava pendente
        cached.conn = await cached.promise
    } catch (error) {
        // se conexão falhar
        cached.promise = null;
        throw error; // lança o erro para o view    
    }
    return cached.conn;
}

// transforma em um componente reutilizável
export default connectMongo;

/**
  1º Passo: Criar o endereço de conexão;
  2º Passo: Criar o cached para armazenar as conexões ao longo do projeto
  3º Passo: Verificar se já existe uma conexão estabelecida com o database
  4º Passo: Verifica se não existe uma promessa de conexão e cria uma promise
  5º Passo: Com a promise criada, estabelece uma conexão com o banco
 **/