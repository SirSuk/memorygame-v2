//Grab acouple of things
console.log("raddd")
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives= 16

//Link text
playerLivesCount.textContent = playerLives;

// Generate the object
const getData = () => [
    {imgSrc: './assets/perro.jpg', name: 'perro'},
    {imgSrc: './assets/cerveza.jpg', name: 'cerveza  '},
    {imgSrc: './assets/chaval.jpg', name: 'chaval'},
    {imgSrc: './assets/manzana.jpg', name: 'manzana'},
    {imgSrc: './assets/naranja.jpg', name: 'naranja'},
    {imgSrc: './assets/churros.jpg', name: 'churros  '},
    {imgSrc: './assets/canario.jpg', name: 'canario'},
    {imgSrc: './assets/pasta.jpg', name: 'pasta'},
    {imgSrc: './assets/perro.jpg', name: 'perro'},
    {imgSrc: './assets/cerveza.jpg', name: 'cerveza  '},
    {imgSrc: './assets/chaval.jpg', name: 'chaval'},
    {imgSrc: './assets/manzana.jpg', name: 'manzana'},
    {imgSrc: './assets/naranja.jpg', name: 'naranja'},
    {imgSrc: './assets/churros.jpg', name: 'churros  '},
    {imgSrc: './assets/canario.jpg', name: 'canario'},
    {imgSrc: './assets/pasta.jpg', name: 'pasta'},
    
   
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
            restart("😧try again");
      
        }
    }
   }
   if(toggleCard.length === 16) {
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
    playerLives = 16;
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text),100);
}

cardGenerator()