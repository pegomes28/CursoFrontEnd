// Parte 01
let titulo = document.getElementById("titulo");
console.log(titulo);

let paragrafo = document.querySelector("p");
console.log(paragrafo);

// Parte 02
document.getElementById("btn").addEventListener(
    "click", MudarElemento
)

function MudarElemento(){
    titulo.innerText = "Novo Título"
    descricao.innerText = "Nova Descrição"
}

// Parte 03
function Cor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "#84c8f0"
};

// Parte 04

titulo.classList.add("descricao");

document.querySelector(".descricao").style.color = "red";
