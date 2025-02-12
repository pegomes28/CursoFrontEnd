// Introdução JavaScript

// Tipo de Dados (Escopo, Tipagem)

// tipo - String = Texto
var nome = "João"; // Variável de Escopo Global
nome = "José"; // Redefinir Valor
var nome = "Afonso"; // Redefinição da Var

// tipo - Number = Número
let idade = 25; // Variável de Escopo Local
idade = 26; //Redefnir Valor - Ok
// let idade = 30; // Erro ao Redeclarar

// tipo - Number = Número
const PI = 3.1415; // Constante
//PI = 5.2425; //Erro - Não Pode Redefinir o Valor
//const PI = 4.6578; // Erro - Não Pode Redeclarar a Const

// tipo - Boolean
var aprovado = true;

// tipo - Undefined = Indefinido
var media;

// tipo - Null = Vazio
var info = null;


console.log("Nome: "+nome); // Imprimir no Terminal
console.log("Idade: "+idade);
console.log("Aprovação: "+aprovado);
console.log("Media: "+media);
console.log("informações: "+info);

