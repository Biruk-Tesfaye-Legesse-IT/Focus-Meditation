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


function one() {

    top1.style.backgroundColor = "lightgreen";
}

function two() {

    top2.style.backgroundColor = "tomato";

}

function three() {

    top3.style.backgroundColor = "tomato";
}

function four() {

    bottom1.style.backgroundColor = "yellow";
}

function five() {



    bottom2.style.backgroundColor = "lightskyblue";
}

function six() {



    bottom3.style.backgroundColor = "lightskyblue";
}

function seven() {

    bbottom1.style.backgroundColor = "yellow";
}

function eight() {



    bbottom2.style.backgroundColor = "lightskyblue";
}

function nine() {



    bbottom3.style.backgroundColor = "lightskyblue";
}


function clearColor() {
    top1.style.backgroundColor = "darkgreen";
    top2.style.backgroundColor = "darkred";
    top3.style.backgroundColor = "cyan";
    bottom1.style.backgroundColor = "goldenrod";
    bottom2.style.backgroundColor = "darkblue";
    bottom3.style.backgroundColor = "yellow";
    bbottom1.style.backgroundColor = "goldenrod";
    bbottom2.style.backgroundColor = "darkblue";
    bbottom3.style.backgroundColor = "yellow";

}

function flashColor() {
    top1.style.backgroundColor = "lightgreen";
    top2.style.backgroundColor = "tomato";
    top3.style.backgroundColor = "tomato";
    bottom1.style.backgroundColor = "yellow";
    bottom2.style.backgroundColor = "lightskyblue";
    bottom3.style.backgroundColor = "lightskyblue";
    bbottom1.style.backgroundColor = "yellow";
    bbottom2.style.backgroundColor = "lightskyblue";
    bbottom3.style.backgroundColor = "lightskyblue";
}

