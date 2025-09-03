
import mongoose from "mongoose";
import { type } from "os";

const TodoSchema = new mongoose.Schema({
    title:{ type: String,
        required:[true, "O título é Obrigatório"],
        trim: true,
        maxLength: [100, "Não pode mais de 100char"]
        },
    completed:{
        type: Boolean,
        default: false,
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
    });

export default TodoSchema;