// Import stylesheets
import './style.css';
// Write Javascript code!
function wait(ms = 0){
  return new Promise(resolve => setTimeout(resolve, ms)); 
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()){
  return Math.floor(Math.random() * (max - min) + min);
}

function draw(element){
  console.log(element);
}

const els = document.querySelectorAll('[data-type]');