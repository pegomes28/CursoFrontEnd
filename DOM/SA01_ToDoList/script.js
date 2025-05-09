// Script para lista de tarefas usando o DOM

document.body.style.backgroundColor =  "#74b0d4";
document.body.style.fontFamily = "Arial";
document.body.style.textAlign = "center";
let container = document.querySelector(".container");
container.style.width = "50%";
container.style.backgroundColor = "#a6d3ed";
container.style.margin = "auto";
container.style.padding = "30px";
container.style.borderRadius = "15px";
let tarefa = document.getElementById("tarefa");
tarefa.style.width = "50%";
tarefa.style.padding = "5px";
tarefa.style.borderRadius = "5px";
let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.style.padding = "6px 10px";
btnEnviar.style.border = "none";
btnEnviar.style.background = "#5bc4de";
btnEnviar.style.color = "white";
btnEnviar.style.borderRadius = "5px";
btnEnviar.style.cursor = "pointer";
let mudarCor = document.getElementById("mudarCor")
mudarCor.style.padding = "6px 10px";
mudarCor.style.border = "none";
mudarCor.style.background = "#4284f5";
mudarCor.style.color = "white";
mudarCor.style.borderRadius = "5px";
mudarCor.style.cursor = "pointer";

// Lógica de Funcionamento da Lista de Tarefas

// criar o ouvinte para a tarefa
btnEnviar.addEventListener(
    "click", criarTarefa
);
function criarTarefa(){
    let texto = tarefa.value.trim();
    if(texto === ""){
        return;
    }
    //se não estiver vazio
    let li = document.createElement("li");
    li.innerHTML = texto+'<button onclick="removeTarefa(this)" class="btnRemove">Remover</button>'
    //adicionar li -> ul
    let ul = document.getElementById("listaTarefas");
    ul.appendChild(li);
    // apaga o campo do input
    tarefa.value = "";
}


//function remover
function removeTarefa(botao){
    botao.parentElement.remove();
}

function Cor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "#94ebb1"
}

document.getElementById("mudarCor").addEventListener("click", function() {
    let cores = ["#f542ec", "#9042f5", "#84f542", "#ff4d00", "#abfffc","#ffffff", "#000000", "#74b0d4" ];
    document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
});

