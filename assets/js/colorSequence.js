// jshint esversion:6


let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let win;


const turnCounter = document.querySelector("#turn");
const top1 = document.querySelector("#top1");
const top2 = document.querySelector("#top2");
const top3 = document.querySelector("#top3");
const bottom1 = document.querySelector("#bottom1");
const bottom2 = document.querySelector("#bottom2");
const bottom3 = document.querySelector("#bottom3");
const bbottom1 = document.querySelector("#b-bottom1");
const bbottom2 = document.querySelector("#b-bottom2");
const bbottom3 = document.querySelector("#b-bottom3");
const startButton = document.querySelector("#start");


startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});

function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;

    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 9) + 1);

    }
    console.log(order);
    compTurn = true;

    intervalId = setInterval(gameTurn, 800);
}

