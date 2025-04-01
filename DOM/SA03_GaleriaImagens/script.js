// galeria de imagens dinâmicas -> DOM

let uploadInput = document.getElementById("upload");
let btnAdd = document.getElementById("addImagem");
let galeria = document.getElementById("galeria");
let carrossel = document.getElementById("carrossel");

// vetor das imagens
let imagens = [];

btnAdd.addEventListener("click", () =>{
    let imagemUrl = uploadInput.value.trim(); // corta os espaços do começo e do final
    if(imagemUrl ==="") return;
    imagens.push(imagemUrl);
    atualizarGaleria();
    atualizarCarrossel();
    uploadInput.value = ""; // limpa o campo do imput
});

//atualizar galeria
function atualizarGaleria(){
    galeria.innerHTML = ""; // Limpa a Galeria
    imagens.forEach(
        (imagem,index) => {
            let div = document.createElement("div");
            div.classList.add("imagemContainer");
            let img = document.createElement("img");
            img.src = imagem;
            let btnRemove = document.createElement("button");
            btnRemove.innerText = "X";
            btnRemove.classList.add("remove");
            btnRemove.addEventListener("click",()=>{  // Remover a imagem do vetor
                imagens.splice(index,1);
                atualizarGaleria(); // Recursão
                atualizarCarrossel();
            });
            div.appendChild(img);
            div.appendChild(btnRemove);
            galeria.appendChild(div);
        }
    );
}

// Atualizar Carrossel
function atualizarCarrossel(){
    carrossel.innerHTML = ""; //Limpa o Carrossel
    imagens.forEach( imagem => {
        let img = document.createElement("img");
        img.src = imagem;
        img.style.width = "100%"; //Garante que a imagem ocupe o espaço correto
        carrossel.appendChild(img);
    });
    carrossel.style.width = `${imagens.length*100}%`;
    iniciarCarrossel(); // Função para iniciar o carrossel
}

// function iniciarCarrossel
function iniciarCarrossel(){
    let index = 0;
    setInterval(()=>{
        index = (index+1) % imagens.length;
        carrossel.style.transition = `transform ${(1+imagens.length)/imagens.length}s easy-in-out`; //transição entre as imagens
        carrossel.style.transform = `translateX(-${index*100/imagens.length}%)`; //Move corretamente o carrossel
    },2000);
}