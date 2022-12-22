//Grab acouple of things
console.log("raddd")
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives= 20

//Link text
playerLivesCount.textContent = playerLives;

// Generate the object
const getData = () => [
    {imgSrc: './assets/perro.webp', name: 'perro'},
    {imgSrc: './assets/cerveza.webp', name: 'cerveza  '},
    {imgSrc: './assets/chaval.webp', name: 'chaval'},
    {imgSrc: './assets/manzana.webp', name: 'manzana'},
    {imgSrc: './assets/naranja.webp', name: 'naranja'},
    {imgSrc: './assets/churros.webp', name: 'churros  '},
    {imgSrc: './assets/canario.webp', name: 'canario'},
    {imgSrc: './assets/pasta.webp', name: 'pasta'},
    {imgSrc: './assets/pez.webp', name: 'pez'},
    {imgSrc: './assets/agua.webp', name: 'agua  '},
    {imgSrc: './assets/cola.webp', name: 'cola'},
    {imgSrc: './assets/medusa.webp', name: 'medusa'},
    {imgSrc: './assets/tetera.webp', name: 'tetera'},
    {imgSrc: './assets/sandwich.webp', name: 'sandwich'},
    {imgSrc: './assets/flor.webp', name: 'flor'},
    {imgSrc: './assets/cafe.webp', name: 'cafe'},
    {imgSrc: './assets/perro.webp', name: 'perro'},
    {imgSrc: './assets/cerveza.webp', name: 'cerveza  '},
    {imgSrc: './assets/chaval.webp', name: 'chaval'},
    {imgSrc: './assets/manzana.webp', name: 'manzana'},
    {imgSrc: './assets/naranja.webp', name: 'naranja'},
    {imgSrc: './assets/churros.webp', name: 'churros  '},
    {imgSrc: './assets/canario.webp', name: 'canario'},
    {imgSrc: './assets/pasta.webp', name: 'pasta'},
    {imgSrc: './assets/pez.webp', name: 'pez'},
    {imgSrc: './assets/agua.webp', name: 'agua  '},
    {imgSrc: './assets/cola.webp', name: 'cola'},
    {imgSrc: './assets/medusa.webp', name: 'medusa'},
    {imgSrc: './assets/tetera.webp', name: 'tetera'},
    {imgSrc: './assets/sandwich.webp', name: 'sandwich'},
    {imgSrc: './assets/flor.webp', name: 'flor'},
    {imgSrc: './assets/cafe.webp', name: 'cafe'},
   
]

//Randomize
const randomize = () => {
   
    const cardData = getData()
    cardData.sort(() => Math.random() - 0.5);
    console.log(cardData)
    return cardData;
    
}


//Card Generate Function

const cardGenerator= () => {
    const cardData = randomize();
    console.log("randomize")
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
    console.log("cheking")
    const clickedCard = e.target;
    clickedCard.classList.add("flipped")
    const flippedCards= document.querySelectorAll(".flipped");
    const toggleCard = document.querySelectorAll(".toggleCard");

   // Logic
   if(flippedCards.length === 2) {
    if( flippedCards[0].getAttribute('name') === 
        flippedCards[1].getAttribute('name')
        ) {
        console.log("match")
        flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            card.style.pointerEvents = 'none';
        });
    } else {
        console.log("wrong")
        flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("toggleCard"), 1000);
        });
        console.log("mal")
        playerLives--;
        playerLivesCount.textContent = playerLives;

        if(playerLives === 0) {
            restart("😧Intentalo de Nuevo");
      
        }
    }
   }
   if(toggleCard.length === 32) {
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
    playerLives = 20;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text),100);
}


cardGenerator()