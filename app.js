/*-------------- Constants -------------*/


/*---------- Variables (state) ---------*/
let simonsSequence = []
let playersSequence = []

/*----- Cached Element References  -----*/
let redButtonEL = document.querySelector('.redButton')
let yellowButtonEL = document.querySelector('.yellowButton')
let greenButtonEL = document.querySelector('.greenButton')
let blueButtonEL = document.querySelector('.blueButton')
/*-------------- Functions -------------*/


/*----------- Event Listeners ----------*/


let numberGen = [1,2,3,4]

const generateRandomNumbers = () => {
    randomNumber1 = numberGen[Math.floor(Math.random() * numberGen.length)]
    randomNumber2 = numberGen[Math.floor(Math.random() * numberGen.length)]
    randomNumber3 = numberGen[Math.floor(Math.random() * numberGen.length)]
    randomNumber4 = numberGen[Math.floor(Math.random() * numberGen.length)]
    randomNumber5 = numberGen[Math.floor(Math.random() * numberGen.length)]
    randomNumber6 = numberGen[Math.floor(Math.random() * numberGen.length)]
    randomNumber7 = numberGen[Math.floor(Math.random() * numberGen.length)]
    randomNumber8 = numberGen[Math.floor(Math.random() * numberGen.length)]
    randomNumber9 = numberGen[Math.floor(Math.random() * numberGen.length)]
    randomNumber10 = numberGen[Math.floor(Math.random() * numberGen.length)]
    return randomNumber1
  }

const changeColor1 = () => {
  redButtonEL.style.backgroundColor = "red"
 
}

const changeColor2 = () => {
  greenButtonEL.style.backgroundColor = "green"
}

const changeColor3 = () => {
    blueButtonEL.style.backgroundColor = "blue"
}
    

const changeColor4 = () => {
    yellowButtonEL.style.backgroundColor = "yellow"
    }

const dimColor1 = () => {
    redButtonEL.style.backgroundColor = " rgb(60, 0, 0)"
}

const dimColor2 = () => {
    greenButtonEL.style.backgroundColor = "rgb(0, 60, 0)"
}

const dimColor3 = () => {
    blueButtonEL.style.backgroundColor = "rgb(0, 0, 60)"
}

const dimColor4 = () => {
    yellowButtonEL.style.backgroundColor = "rgb(60, 60, 0)"
}

SIMON.addEventListener('click', (event) => {
    const target = event.target;
if (target.classList.contains('START')) {   
    simonsSequence.push(generateRandomNumbers())
    console.log(randomNumber1);
    console.log(simonsSequence)
    };
   
     if (randomNumber1 === numberGen[0])  {
        changeColor1()
     } else if (randomNumber1 === numberGen[1])  {
        changeColor2()
     } else if  (randomNumber1 === numberGen[2])  {
        changeColor3()
     } else if  (randomNumber1 === numberGen[3])  {
        changeColor4()
     };
      

     if (target.classList.contains('redButton')) { 
        dimColor1()
     } else if (target.classList.contains('greenButton')) { 
        dimColor2()
     } else if (target.classList.contains('blueButton')) { 
        dimColor3()
     } else if (target.classList.contains('yellowButton')) { 
        dimColor4()
     } 
});