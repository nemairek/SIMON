/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/


/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/


/*----------- Event Listeners ----------*/

let redButton = null;
let yellowButton = null;
let blueButton = null;
let greenButton = null;

let numberGen = [1,2,3,4]

const randomNumber = numberGen[Math.floor(Math.random() * numberGen.length)]



SIMON.addEventListener('click', (event) => {
    const target = event.target;
if (target.classList.contains('START')) {
  
    console.log(randomNumber)
}



});