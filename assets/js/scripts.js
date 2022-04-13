const botaoGostei = document.getElementById('curtirCard1');

botaoGostei.addEventListener('click', function () {
    botaoGostei.classList.toggle('gostei');
});

// cards

// busca o elemento pai
let elementoPai = document.getElementById('listaCards');
// cria o elemento li
let lista = document.createElement('li');
// cria o nó de texto
let texto = document.createTextNode("testando");
// insere o nó de texto no elemento li
lista.appendChild(texto);
// insere o elemento filho no elemento pai
elementoPai.appendChild(lista);



let elementoPaiDois = document.getElementById('containerCard');
let divCard = document.createElement('div');
let imagem = document.createElement('img');
let cabecalhoCard = document.createElement('header');
let titulo = document.createElement('h1');
let texto = document.createTextNode("novo teste");


cabecalhoCard.appendChild(imagem);