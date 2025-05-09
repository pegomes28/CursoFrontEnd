//Script de Manipulação DOM

//getElementById -> Variável Simples
let titulo = document.getElementById("titulo"); //HTML --> Id
console.log(titulo) //Mostra no console as informações da ID
titulo.innerText = "Outro Titulo"; // Modificar o Conteúdo

//getElementByTagName -> Variável Vetor(Array)
let paragrafo = document.getElementsByTagName("p"); // HTML --> p
//Modificação de Elemento
paragrafo[0].innerText = "Exemplo de Parágrafo Modificado por DOM";
//Modificar Syle de Elemento
paragrafo[1].style.color = "red";

//getElementsByClassName -> Variável Vetor(Array)
let descricao = document.getElementsByClassName("descricao");
for(let i = 0; i<descricao.length; i++){
    descricao[i].style.color = "blue";
};

// querySelector -> Variável Simples -> Seleciona o Primeiro
let p = document.querySelector("p");
//modificação de fonte
p.style.fontWeight = "bold";

// querySelectorAll -> Variável Vetor(Array) -> Seleciona Todos
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach(element => {
    element.style.fontWeight = "bold";
});

// Eventos Listener(ouvinte)

function MudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "#caa6ed"
};

// chamando direto no script o ouvinte
document.getElementById("btncolor").addEventListener("click", OutraCor)

function OutraCor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "#a6d7ed"
};
