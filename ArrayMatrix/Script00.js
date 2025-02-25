// Declaração de um Array "[ ]"
let Array = []; //Array Dinâmico - Pode ser modificado 

let ArrayNumeros = [1,2,3,4,5,6,7,8,9];
let ArrayTexto = ["Sapato", "Caixa", "Meia"];
let ArrayMisto = [1, "José", true];

console.log("                ")
console.log(" separando aqui ")
console.log("                ")


// Tamanho de um Array - length
console.log(ArrayNumeros.length); //9

// Acessar um elemento do Array (index)
console.log(ArrayTexto[1]); // Índice = Posição -1 

// Adicionar elementos em um Array

// no começo (unshift)
ArrayTexto.unshift("Tênis");
console.log(ArrayTexto);
//no fim (push)
ArrayTexto.push("Chinelo");
console.log(ArrayTexto);

// Trocar Elementos 
ArrayTexto[2] = "Sacola";
console.log(ArrayTexto);

// Remover Elementos do Array

//no começo (shift)
ArrayTexto.shift();
console.log(ArrayTexto)

//no final (pop)
ArrayTexto.pop();
console.log(ArrayTexto);

console.log("                ")
console.log("Percorrer um Array:")
console.log("                ")


// Percorrer um Array - Laços de Repetição 
// Percorrer o ArrayNumeros
for(let i =0; i<ArrayNumeros.length; i++){
    console.log("índice["+i+"]= "+[ArrayNumeros[i]]);
}

console.log("                ")
console.log("     ForEach:     ")
console.log("                ")


// ForEach
ArrayTexto.forEach(elemento => {
    console.log(elemento)
});

console.log("                ")
console.log("  Métodos úteis:  ")
console.log("                ")

// Métodos úteis em Arrays

// IndexOF
console.log(ArrayNumeros.indexOf(5)); //4
console.log(ArrayNumeros.indexOf(10)); //-1


// Splice (remover um elemento de uma posição)
console.log("                ")
console.log("     Splice:     ")
console.log("                ")


ArrayMisto.splice(2, 1);
console.log(ArrayMisto);


// Operações Avançadas de Arrays
console.log("                ")
console.log("Operações Avançadas:")
console.log("                ")

// Map - Novos Valores 
console.log(" - Map:")
let valores = [10, 20, 30 , 40, 50];
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);
console.log("               ")

//Filter - Comparação
console.log(" - Filter:")
let valoresFilter = valores.filter(x => x>25);
console.log(valoresFilter);
console.log("               ")

// Desafio (filtro x<35) && (x=*3)
console.log("                ")
console.log("    Desafio:    ")
console.log("                ")

// Teste Cisgênero
console.log(" - Teste: ")
let ValoresDesafio = valores.filter(x => x<35 ).map(x=> x*3);
console.log(ValoresDesafio)

// Reduce ([] -. let x)
console.log("                ")
console.log("     Reduce:    ")
console.log("                ")

let soma = valores.reduce((x,y) => x+y);
console.log(soma);


// Sort (organizar)
console.log("                ")
console.log("      Sort:     ")
console.log("                ")

let aleatorio = [7, 4, 2, 9, 1, 5, 8, 3, 6];
console.log(aleatorio);
let ordenado = aleatorio.sort();
console.log(ordenado);