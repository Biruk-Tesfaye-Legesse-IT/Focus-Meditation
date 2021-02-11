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
let trialNumber = document.getElementById("trialNumber");
let trialText=document.getElementById("trialText");
let roundNumber=document.getElementById("roundNumber");
startButton.addEventListener('click', start);