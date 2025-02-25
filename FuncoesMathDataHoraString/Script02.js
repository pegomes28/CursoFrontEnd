// Manipulação de String (Cadeia de Caracteres)

let texto = "Aula de JavaScript";


// Contar quantos caracteres tem essa variável
console.log(texto.length); // 18 Caracteres 


// Maiúsculas e Minúsculas 
console.log(texto.toLocaleUpperCase());  //MAIUSCULA
console.log(texto.toLowerCase());  //minuscula
console.log(texto.substring(0,4));  //Aula
console.log(texto.slice(-10));  //JavaScript

// Substituição de partes na String
let texto2 = texto.replace("Java","Type"); // Aula de TypeScript
console.log(texto2)

// Tesoura(trim)
let texto3 = "  JavaScript  "
console.log(texto3);
console.log(texto3.trim());

// Separação de Strings (Split)

let linguagens = "JavScript, Python, PHP, C++, Java";
let linguagensArray = linguagens.split(", ");
console.log(linguagens);
console.log(linguagensArray);

// Desafio
//Contar a quantidade de caracteres SEM ESPAÇO
let desafio1 = "Bom Dia Com Muita Alegria" 
let SolucaoDesafio = desafio1.replaceAll(" ", "");
console.log(desafio1);
console.log(SolucaoDesafio);
console.log(desafio1.length);
console.log(SolucaoDesafio.length);