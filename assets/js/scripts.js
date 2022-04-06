const botaoGostei = document.getElementById('curtirCard1');

botaoGostei.addEventListener('click', function () {
    botaoGostei.classList.toggle('gostei');
});

const container = document.getElementById('card');

const conteudo = [
    {
        image: '../img/grace-hopper.jpg',
        title: 'Título 1',
        content: 'super content 1',
    },
    {
        image: '../img/grace-hopper.jpg',
        title: 'Título 2',
        content: 'super content 2',
    },
    {
        image: '../img/grace-hopper.jpg',
        title: 'Título 3',
        content: 'super content 3',
    },
]

conteudo.map(card => {
    let cardDiv = document.createElement('div');

    cardDiv.innerHTML = `        
            <div class="cabecalho">
                <img src="${card.image}"/>
            </div>
            <div class="conteudoCard">
                <h4>${card.title}</h4>
                <p>${card.content}</p>
            </div>
            <button class="info-button">+ info</button> `
            
    document.getElementsByClassName('cards')[0].appendChild(cardDiv);
})

   
/*    let cardHTML = '';
   conteudo.map(element => {
        cardHTML += '<div> \
        <div class="cabecalho"> \
         <img src="'+element.image+'"/> \
        </div> \
        <div class="conteudoCard"> \
           <h4>'+element.title+'</h4> \
         <p>'+element.content+'</p> \
        </div> \
        <button class="fas fa-solid fa-heart">+ info</button> \
      </div> \
      ';
   });
   
document.getElementsByClassName('card')[0].innerHTML = cardHTML; */