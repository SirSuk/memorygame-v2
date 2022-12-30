//Grab acouple of things
console.log("raddd")
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives= 20

//Link text
playerLivesCount.textContent = playerLives;


const loader = document.querySelector(".loader");
console.log(loader)
setTimeout(() => {
    loader.style.display="none"
  }, 3000)




// Generate the object
const getData = () => [
   
    {imgSrc: './assets/v2/abeja.png', name: 'abeja'},
    {imgSrc: './assets/v2/buho.png', name: 'buho'},
    {imgSrc: './assets/v2/conejo.png', name: 'conejo'},
    {imgSrc: './assets/v2/estrella.png', name: 'estrella'},
    {imgSrc: './assets/v2/fruta.png', name: 'fruta'},
    {imgSrc: './assets/v2/gallina.jpg', name: 'gallina'},
    {imgSrc: './assets/v2/gato.png', name: 'gato'},
    {imgSrc: './assets/v2/pato.png', name: 'pato'},
    {imgSrc: './assets/v2/perro.jpg', name: 'perro'},
    {imgSrc: './assets/v2/pez.png', name: 'pez'},
    {imgSrc: './assets/v2/vaca.png', name: 'vaca'},
    {imgSrc: './assets/v2/zorro.jpg', name: 'zorro'},
    {imgSrc: './assets/v2/abeja.png', name: 'abeja'},
    {imgSrc: './assets/v2/buho.png', name: 'buho'},
    {imgSrc: './assets/v2/conejo.png', name: 'conejo'},
    {imgSrc: './assets/v2/estrella.png', name: 'estrella'},
    {imgSrc: './assets/v2/fruta.png', name: 'fruta'},
    {imgSrc: './assets/v2/gallina.jpg', name: 'gallina'},
    {imgSrc: './assets/v2/gato.png', name: 'gato'},
    {imgSrc: './assets/v2/pato.png', name: 'pato'},
    {imgSrc: './assets/v2/perro.jpg', name: 'perro'},
    {imgSrc: './assets/v2/pez.png', name: 'pez'},
    {imgSrc: './assets/v2/vaca.png', name: 'vaca'},
    {imgSrc: './assets/v2/zorro.jpg', name: 'zorro'},
    
   
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
    playerLivesCount.textContent = playerLives;
    setTimeout(() => window.alert(text),100);
}


cardGenerator()