/* const botaoGostei = document.getElementById('curtirCard1');

botaoGostei.addEventListener('click', function () {
    botaoGostei.classList.toggle('gostei');
}); */

// cards

let array = [
    {
      nome: "Grace Hopper",
      cargo: "Analista de Sistemas",
      citacao: "Para mim programação é mais do que uma arte prática importante. É também um empreendimento gigantesco nos fundamentos do conhecimento.",
    },
    {
        nome: "Bill Gates",
        cargo: "Fundador da Microsoft",
        citacao: "É genial festejar o sucesso, mas é mais importante aprender com as lições do fracasso.",
    }
    ];

let citacao = {
    imagem: "img/grace-hopper.jpg",
    nome: "Grace Hopper",
    cargo: "Analista de Sistemas",
    citacao: "Para mim programação é mais do que uma arte prática importante. É também um empreendimento gigantesco nos fundamentos do conhecimento.",
};

// // busca o elemento pai
// let elementoPai = document.getElementById('listaCards');
// // cria o elemento li
// let lista = document.createElement('li');
// // cria o nó de texto
// let texto = document.createTextNode("testando");
// // insere o nó de texto no elemento li
// lista.appendChild(texto);
// // insere o elemento filho no elemento pai
// elementoPai.appendChild(lista);






function criarCard(){    

    let grupoCards = document.getElementsByClassName("cards")[0];
    let artigo = document.createElement("article");
    artigo.className = "card";
    let divCabecalho = document.createElement("div");
    divCabecalho.className = "cabecalho";

    let imagem = document.createElement("img");
    imagem.src = "img/steve-jobs.jpg";

    let hearderCard = document.createElement("header");
    let tituloCard = document.createElement("h2");
    tituloCard.className = "titulo";
    let textoTituloCard = document.createTextNode("Steve Jobs");

    let tagSpan = document.createElement("span");
    let textoSpan = document.createTextNode("Fundador da Apple Inc.");

    divCabecalho.appendChild(imagem);
    divCabecalho.appendChild(hearderCard);
    hearderCard.appendChild(tituloCard);
    tituloCard.appendChild(textoTituloCard);
    hearderCard.appendChild(tagSpan);
    tagSpan.appendChild(textoSpan);
    artigo.appendChild(divCabecalho);
    grupoCards.appendChild(artigo);

}

criarCard();