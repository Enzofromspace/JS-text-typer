// Import stylesheets
import './style.css';
// Write Javascript code!
function wait(ms = 0){
  return new Promise(resolve => setTimeout(resolve, ms)); 
}

function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()){
  return Math.floor(Math.random() * (max - min) + min);
}

//async loop
async function draw(el){
  const text = el.textContent;
  let soFar = '';
  for(const letter of text){
    //console.log(letter);
    soFar += letter;
    el.textContent = soFar; 
    //wait a bit
    const {typeMin, typeMax} = el.dataset;
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
    await wait(amountOfTimeToWait); 
  }
}

//recursive loop

document.querySelectorAll('[data-type]').forEach(draw);