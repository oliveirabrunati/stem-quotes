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
    // cria a tag img e adiciona a imagem
    let imagem = document.createElement("img");
    imagem.src = "img/steve-jobs.jpg";
    // cria a tag header
    let hearderCard = document.createElement("header");
    // cria a tag h2 e adiciona o nome do autor
    let tituloCard = document.createElement("h2");
    tituloCard.className = "titulo";
    let textoTituloCard = document.createTextNode("Steve Jobs");
    // cria a tag span e adiciona o cargo do autor
    let tagSpan = document.createElement("span");
    let textoSpan = document.createTextNode("Fundador da Apple Inc.");

    // cria o corpo
    let divCorpo = document.createElement("div");
    divCorpo.className = "conteudoCard";
    // cria a tag paragráfo
    let paragrafoCard = document.createElement("p");
    let conteudoParagrafo = document.createTextNode("Tenha coragem de seguir o que seu coração e sua intuição dizem. Eles já sabem o que você realmente deseja. Todo resto é secundário.");

    // cria o rodape
    let divRodape = document.createElement("footer");
    divRodape.className = "rodapeCard";
    let linkBiografia = document.createElement("a");
    let textoLink = document.createTextNode("Biografia");
    // criando icones rodape
    let divSocial = document.createElement("div");
    divSocial.className = "icones";
    let iconeCurtir = document.createElement("i");
    iconeCurtir.className = "fas fa-solid fa-heart";
    let iconeCompartilhar = document.createElement("i");
    iconeCompartilhar.className = "fas fa-solid fa-share";
    
    
    divCabecalho.appendChild(imagem);
    divCabecalho.appendChild(hearderCard);
    hearderCard.appendChild(tituloCard);
    tituloCard.appendChild(textoTituloCard);
    hearderCard.appendChild(tagSpan);
    tagSpan.appendChild(textoSpan);
    artigo.appendChild(divCabecalho);
    grupoCards.appendChild(artigo);
    
    artigo.appendChild(divCorpo);
    divCorpo.appendChild(paragrafoCard);
    paragrafoCard.appendChild(conteudoParagrafo);

    linkBiografia.appendChild(textoLink);
    divRodape.appendChild(linkBiografia);
    artigo.appendChild(divRodape);

    divRodape.appendChild(divSocial);
    divSocial.appendChild(iconeCurtir);
    divSocial.appendChild(iconeCompartilhar);
}

criarCard();