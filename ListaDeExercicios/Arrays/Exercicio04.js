let Array = [];
let numeros = [15, 8, 22, 5, 19, 30];

console.log(numeros);

let ordenado = numeros.sort((a, b)=> a - b);
console.log(ordenado);

let numerosFilter = numeros.filter((elemento) => elemento > 10);
console.log(numerosFilter);

let numerosSoma = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(`[ ${numerosSoma} ]`);