//Grab acouple of things
window.onload = () => {
const section = document.querySelector("section");
const contadorDeVidas = document.querySelector("span");
let playerLives= 20


//Link text
contadorDeVidas.textContent = playerLives;




// Generate the object
const getData = () => [
   
    {imgSrc: './assets/v2/abeja.png', name: 'abeja'},
    {imgSrc: './assets/v2/buho.png', name: 'buho'},
    {imgSrc: './assets/v2/aveazul.jpg', name: 'aveazul'},
    {imgSrc: './assets/v2/rana.jpg', name: 'rana'},
    {imgSrc: './assets/v2/raton.jpg', name: 'raton'},
    {imgSrc: './assets/v2/gallina.jpg', name: 'gallina'},
    {imgSrc: './assets/v2/gato.png', name: 'gato'},
    {imgSrc: './assets/v2/ardilla.jpg', name: 'ardilla'},
    {imgSrc: './assets/v2/perro.jpg', name: 'perro'},
    {imgSrc: './assets/v2/leonmarino.jpg', name: 'leonmarino'},
    {imgSrc: './assets/v2/vaca.jpg', name: 'vaca'},
    {imgSrc: './assets/v2/zorro.jpg', name: 'zorro'},
    {imgSrc: './assets/v2/abeja.png', name: 'abeja'},
    {imgSrc: './assets/v2/buho.png', name: 'buho'},
    {imgSrc: './assets/v2/aveazul.jpg', name: 'aveazul'},
    {imgSrc: './assets/v2/rana.jpg', name: 'rana'},
    {imgSrc: './assets/v2/raton.jpg', name: 'raton'},
    {imgSrc: './assets/v2/gallina.jpg', name: 'gallina'},
    {imgSrc: './assets/v2/gato.png', name: 'gato'},
    {imgSrc: './assets/v2/ardilla.jpg', name: 'ardilla'},
    {imgSrc: './assets/v2/perro.jpg', name: 'perro'},
    {imgSrc: './assets/v2/leonmarino.jpg', name: 'leonmarino'},
    {imgSrc: './assets/v2/vaca.jpg', name: 'vaca'},
    {imgSrc: './assets/v2/zorro.jpg', name: 'zorro'},  
   
]

//Randomize
const randomize = () => {
   
    const cardData = getData()
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
    
}


//Card Generate Function

const cardGenerator= () => {
    const cardData = randomize();
    // Generate the HTML


    cardData.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back =  document.createElement('div');
        card.classList = 'card'
        face.classList = 'face'
        back.classList = 'back';
        //Attach info to cards
        face.src=item.imgSrc;
        card.setAttribute("name", item.name)
        

        //Attach cards to section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) => {
            card.classList.toggle("toggleCard")
            checkCards(e)
        }
        )
    })
    

}

// Check cards

const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped")
    const flippedCards= document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");

   // Logic
   if(flippedCards.length === 2) {
    if( flippedCards[0].getAttribute('name') === 
        flippedCards[1].getAttribute('name')
        ) {
        flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            card.style.pointerEvents = 'none';
        });
    } else {
        flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("toggleCard"), 1000);
        });
        playerLives--;
        contadorDeVidas.textContent = playerLives;

        if(playerLives === 0) {
            restart("😧Intentalo de Nuevo");
      
        }
    }
   }
   if(toggleCard.length === 24) {
            restart("😘you won")
   }
}

//Restart

const restart = (text) => {
    let cardData = randomize();
    
    let faces = document.querySelectorAll("face");
    let cards = document.querySelectorAll(".card");
    cardData.forEach((item,index) => {
        cards[index].classList.remove('toggleCard');


        // //Randomize

        setTimeout(() => {
        cards[index].style.pointerEvents = "all"
        faces[index].src= item.imgSrc;
        cards[index].setAttribute("name", item.name);
        section.style.pointerEvents = "all";
        },1000);
    })
    playerLives = 15;
    contadorDeVidas.textContent = playerLives;
    setTimeout(() => window.alert(text),100);
}


cardGenerator()

}