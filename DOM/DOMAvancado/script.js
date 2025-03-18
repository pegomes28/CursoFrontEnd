// adicionar elementos avançados com DOM
// construir um cabeçalho com DOM (Header)

let header = document.createElement("header"); // criou o elemento
header.style.backgroundColor = "black";
header.style.height = "8vh";
document.body.appendChild(header);
document.body.style.margin = "0";

// adicionar elementos no header
let divNav = DocumentTimeline.createElement("div");
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.color = "aliceblue";
divNav.style.height = "100%";
divNav.style.alignItems = "center";
divNav.style.fontSize = "5vh";

header.appendChild(divNav);

let itensNav = ["Home", "Produtos", "Contato"];

//adicionar itens na Nav
itensNav.forEach(element => {
    let item = document.createElement("a");
    item.innerText = element;
    divNav.appendChild(item);
})