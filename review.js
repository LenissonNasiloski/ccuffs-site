const reviews = [
    {
        id: 1,
        name: "capeta",
        job: "dono do inferno",
        img: "",
        text: "olá" 
    },
    {
        id: 2,
        name: "capeta2",
        job: "dono do inferno2",
        img: "",
        text: "olá" 
    },
    {
        id: 3,
        name: "capeta3",
        job: "dono do inferno2",
        img: "",
        text: "olá" 
    },
    {
        id: 4,
        name: "capeta4",
        job: "dono do inferno2",
        img: "",
        text: "olá" 
    }
];

const nome = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')
const imagem = document.getElementById('person-img')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let currentItem = 0

window.addEventListener('DOMContentLoaded', function(){
    setDados(currentItem)    
})

function setDados(index){
    const item = reviews[index]
    nome.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
    imagem.src = item.img
}

prevBtn.addEventListener('click', function(){    
    currentItem --     
    if (currentItem < 0){
        currentItem = (reviews.length - 1)
    }
    setDados(currentItem)
})

nextBtn.addEventListener('click', function(){
    currentItem ++
    if (currentItem > (reviews.length - 1)){
         currentItem = 0
    }
    setDados(currentItem)
})

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    setDados(currentItem)
})
