/* const botaoGostei = document.getElementById('curtirCard1');

botaoGostei.addEventListener('click', function () {
    botaoGostei.classList.toggle('gostei');
}); */

// cards

let listaCitacoes = [
    {
        imagem: "img/grace-hopper.jpg",
        nome: "Grace Hopper",
        cargo: "Analista de Sistemas",
        frase: "Para mim programação é mais do que uma arte prática importante. É também um empreendimento gigantesco nos fundamentos do conhecimento.",
        link: "Biografia",
    },
    {
        imagem: "img/steve-jobs.jpg",
        nome: "Steve Jobs",
        cargo: "Fundador da Apple Inc.",
        frase: "Tenha coragem de seguir o que seu coração e sua intuição dizem. Eles já sabem o que você realmente deseja. Todo resto é secundário.",
        link: "Biografia",
    },
    {
        imagem: "img/bill-gates.jpg",
        nome: "Bill Gates",
        cargo: "Fundador da Microsoft",
        frase: "É genial festejar o sucesso, mas é mais importante aprender com as lições do fracasso.",
        link: "Biografia",
    },
    {
        imagem: "img/marie-curie.webp",
        nome: "Marie Curie",
        cargo: "Física e Química",
        frase: "Seja menos curioso sobre as pessoas e mais curioso sobre as ideias.",
        link: "Biografia",
    },
    {
        imagem: "img/mark-zuckerberg.jpg",
        nome: "Mark Zuckerberg",
        cargo: "Fundador do Facebook",
        frase: "Ao dar às pessoas o poder de partilhar, estamos tornando o mundo mais transparente.",
        link: "Biografia",
    },
    {
        imagem: "img/katherine-johnson.jpeg",
        nome: "Katherine Johnson",
        cargo: "Matemática",
        frase: "Matemática está apenas lá... Ou você está certo ou errado. É disso que eu gosto nela.",
        link: "Biografia",
    }
];

function criarCard(citacao) {

    let grupoCards = document.getElementsByClassName("cards")[0];
    let artigo = document.createElement("article");
    artigo.className = "card";
    let divCabecalho = document.createElement("div");
    divCabecalho.className = "cabecalho";
    // cria a tag img e adiciona a imagem
    let imagem = document.createElement("img");
    imagem.src = citacao.imagem;
    // cria a tag header
    let hearderCard = document.createElement("header");
    // cria a tag h2 e adiciona o nome do autor
    let tituloCard = document.createElement("h2");
    tituloCard.className = "titulo";
    let textoTituloCard = document.createTextNode(citacao.nome);
    // cria a tag span e adiciona o cargo do autor
    let tagSpan = document.createElement("span");
    let textoSpan = document.createTextNode(citacao.cargo);

    // cria o corpo
    let divCorpo = document.createElement("div");
    divCorpo.className = "conteudoCard";
    // cria a tag paragráfo
    let paragrafoCard = document.createElement("p");
    let conteudoParagrafo = document.createTextNode(citacao.frase);

    // cria o rodape
    let divRodape = document.createElement("footer");
    divRodape.className = "rodapeCard";
    let linkBiografia = document.createElement("a");
    let textoLink = document.createTextNode(citacao.link);
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

function exibirListaCards(listaCitacoes){

    let cards = document.querySelector(".cards");
    cards.innerHTML = "";

    for (let posicao = 0; posicao < listaCitacoes.length; posicao++){
    
        let citacao = listaCitacoes[posicao];
    
        criarCard(citacao);
    
    }

    if(listaCitacoes.length == 0){

        resultadoBusca = document.createElement("label");
        let naoEncontrado = document.createTextNode("Termo não encontrado");

        resultadoBusca.appendChild(naoEncontrado);
        cards.appendChild(resultadoBusca);
    }
}

exibirListaCards(listaCitacoes);

function pesquisar(){

    let termoBusca = document.getElementById("campoPesquisa").value;
    
    let listaFiltrada = listaCitacoes.filter(function (citacao) {
        
       if(citacao.nome.toLowerCase().includes(termoBusca.toLowerCase())){
            return true;
       }else{
           return false;
       }

    });
    
    exibirListaCards(listaFiltrada);
}
