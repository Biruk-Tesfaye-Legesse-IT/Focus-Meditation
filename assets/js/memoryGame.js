// jshint esversion:6
const cards = document.querySelectorAll('.memory-card');
const startButton = document.querySelector(".start");
const A1 = document.querySelector(".A1");
const A2 = document.querySelector(".A2");
const A3 = document.querySelector(".A3");
const B1 = document.querySelector(".B1");
const B2 = document.querySelector(".B2");
const B3 = document.querySelector(".B3");
const C1 = document.querySelector(".C1");
const C2 = document.querySelector(".C2");
const C3 = document.querySelector(".C3");
const D1 = document.querySelector(".D1");
const D2 = document.querySelector(".D2");
const D3 = document.querySelector(".D3");
let match = 0;
let recordCards = [];
let hasFlippedCard = false;
let trialNumber = document.getElementById("trialNumber");
let trialText=document.getElementById("trialText");
let roundNumber=document.getElementById("roundNumber");
startButton.addEventListener('click', start);



function start() {
    console.log(highScore);
    trialNumber.innerText=10;
    
    console.log("start is being invoked");
    shuffle()
    cards.forEach(card => card.addEventListener('click', flipCard));

    lockBoard = false;

  
    cards.forEach(card => card.classList.remove('flip'));


    recordCards = [];

    hasFlippedCard = false;


}


function flipCard() {

    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    recordCards.push(firstCard);
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;

  
}

function checkForMatch() {
    let isMatch = firstCard.dataset.source === secondCard.dataset.source;
    if (isMatch) { console.log("Same"); }
    console.log(firstCard.dataset.source);
    console.log(secondCard.dataset.source);


    if (isMatch) {
        disableCards();
        match++;
        console.log(match);
        if (match == 6) {

            console.log("You win");
            win();
        }
    } else if(error==10) {
        
        console.log("You Lose");
        lose();

    } else{
        trialNumber.innerText=trialNumber.innerText-1;
        console.log("NumberOfTrials:" + trialNumber.innerHTML);     
        unflipCards();
    }


}

function disableCards() {
    if (firstCard.classList.contains('flips')) {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
    } else {

    }
   
}

// function renableCards() {
//     firstCard.addEventListener('click', flipCard);
//     secondCard.addEventListener('click', flipCard);

//     resetBoard();
// }

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {

        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        error++;
        console.log("Error: " + error);
        
    }, 500);
}


function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];

}

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
};

