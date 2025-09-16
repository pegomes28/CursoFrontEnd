// ===========================================================================================================

import mongoose, { Document, Model, mongo, Schema } from "mongoose";

// Definir a estrutura do obj
export interface ITarefa extends Document{
    // herdamos a base Document do Mongoose
    // Vamos criar os atributos do OBJ
    titulo: string;
    concluida: boolean;
    criadaEm: Date;
}

// Criar a regra (Schema) do MongoDB

const TarefaSchema: Schema<ITarefa> = new mongoose.Schema({
    titulo:{
        type: String,
        required: [true, "O Título é Obrigadtório"],
        trim: true,
        maxlength: [50, "máximo de 50 char"]
    },
    concluida:{
        type: Boolean,
        default: false
    },
    criadaEm:{
        type:Date,
        default:Date.now // pega o carimbo de data e hora que a tarefa foi criada
    }
})

//  export do modelo (tanto para enviar para o banco quanto para receber info do banco)

const tarefa: Model<ITarefa> = mongoose.models.Tarefa || mongoose.model<ITarefa>("Tarefa", TarefaSchema);

// componente reutilizavel
export default tarefa;