const imagens = [
    {
        id: 1,
        src: "tfImagemTeste.jpg"
    },
    {
        id: 2,
        src: "twitchLol.jpg"
    },
    {
        id: 3,
        src: "tfImagemTeste.jpg"
    }
]

let imagemAtual = 0

const buttonRight = document.getElementById('scroll-left');
const buttonLeft = document.getElementById('scroll-right');
const imagem = document.getElementById('img')

buttonRight.addEventListener('click', function () {
    imagem.src = "twitchLol.jpg"    
}) 

buttonLeft.addEventListener('click', function () {    
    imagem.src = prevImagem(imagemAtual)
}) 


function prevImagem(index){
    if ((index - 1) < 0){
        index = imagens.length - 1
    }
    return imagens[index].src
    
}

function nextImagem(index){
    if ((index + 1) > (imagens.length - 1)){
        index = 0
    }
    return imagens[index].src
}