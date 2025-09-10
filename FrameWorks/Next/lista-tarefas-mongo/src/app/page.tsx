"use client";
import { ITarefa } from "@/models/Tarefa";
import { useEffect, useState } from "react";

 // Indicar que é a tela usada pelo cliente-side

export default function Home(){
  // useState => Armazenamento LocalStorage
  const [tarefas, setTarefa] = useState<ITarefa[]>([]);
  const [ newTarefa, setNewTarefa] = useState<string>("");

  // useEffect
  useEffect(()=>{
    // fazer o useEffect no carregamento da tela inicial
    fetchTarefas(); //carregar todas as tarefas do banco de dados
    },[]);

    // Carregar Tarefas
    const fetchTarefas = async() => {
    try {
      const resposta = await fetch("/api/tarefas"); //Realiza a conexão http com o backend
      const data = await resposta.json(); //verificar se está em json
      if(data.success){ //
        setTarefa(data.data);
      }
    } catch (error) {
      console.error(error);
    }
   }

  //  adicionar tarefa

  // update tarefa

  // delete tarefa

  return(
    <div>
      
    </div>
  );
}