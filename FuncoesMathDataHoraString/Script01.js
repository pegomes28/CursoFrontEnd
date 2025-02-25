// Função de Data e Hora
let agora = new Date();

console.log(agora);
console.log(agora.toDateString());
console.log(agora.toLocaleDateString());

//Get
console.log(agora.getFullYear()); //Mostrar ano

//Set
agora.setFullYear(2030);
console.log(agora.toLocaleDateString()); //25/02/2030


//Operações de Data e Hora
let data1 = new Date("2025-02-04");
let data2 = new Date("2025-12-17");

let diferenca = data2-data1;
console.log(diferenca/(1000*60*60*24)); //Calcular em Dias
