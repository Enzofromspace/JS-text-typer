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
/*
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
*/
//recursive loop
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const {typeMin, typeMax} = el.dataset;
  async function drawletter(){
    el.textContent = text.slice(0, index);
    index += 1;
    // add exit condition to get out of the loop
    const amountOfTimeToWait = getRandomBetween(typeMin, typeMax); // by adding this line in the code and not above as a const, we get a random value per each letter
    await wait(amountOfTimeToWait); 
    if(index <= text.length){
      drawletter();
    }
  }
  //when draw start, letter will draw
  drawletter();
}

document.querySelectorAll('[data-type]').forEach(draw);