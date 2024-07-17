/*-------------- Constants -------------*/
// const winSnd = 
const catSays = new Audio("Audio/080047_lose_funny_retro_video-game-80925.mp3")

/*---------- Variables (state) ---------*/
let simonsSequence = []
let playersSequence = []
let score = 0
let loser = null
/*----- Cached Element References  -----*/
let redButtonEL = document.querySelector('.redButton')
let yellowButtonEL = document.querySelector('.yellowButton')
let greenButtonEL = document.querySelector('.greenButton')
let blueButtonEL = document.querySelector('.blueButton')
let scoreEL = document.querySelector('.score')
let loseMsg = document.querySelector('h2')
/*-------------- Functions -------------*/


/*----------- Event Listeners ----------*/


let numberGen = [1,2,3,4]

const render = () => {
    scoreEL.textContent = `roundwins:${score}` 
    if (loser) {
        loseMsg.textContent = 'You Lose'
    }
}

const handleClick = (event) => {
if (loser) 
    return
playersSequence.push()
if (event.target.classList.contains('redButton')) {
    playersSequence.push(1)
    changeColor1()
    setTimeout(dimColor1,200)
} 
if (event.target.classList.contains('greenButton')) {
    playersSequence.push(2)
    changeColor2()
    setTimeout(dimColor2,200)
}
if (event.target.classList.contains('blueButton')) {
    playersSequence.push(3)
    changeColor3()
    setTimeout(dimColor3,200)
}
if (event.target.classList.contains('yellowButton')) {
    playersSequence.push(4)
    changeColor4()
    setTimeout(dimColor4,200)
}
    winCondition()
    render()
}

const winCondition = () => {
    if (simonsSequence.length === playersSequence.length) {
       if (JSON.stringify(simonsSequence) === JSON.stringify(playersSequence)){

        simonsequenceRender()
        console.log('round win')
        score += 1
       } else {
        loser = true
       }
    }
}


const generateRandomNumbers = () => {
    randomNumber1 = numberGen[Math.floor(Math.random() * numberGen.length)]
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
};

const dimColor1 = () => {
    redButtonEL.style.backgroundColor = " rgb(60, 0, 0)"
};

const dimColor2 = () => {
    greenButtonEL.style.backgroundColor = "rgb(0, 60, 0)"
};

const dimColor3 = () => {
    blueButtonEL.style.backgroundColor = "rgb(0, 0, 60)"
};

const dimColor4 = () => {
    yellowButtonEL.style.backgroundColor = "rgb(60, 60, 0)"
};

const simonsequenceRender = (target) => {
    let randomNum = generateRandomNumbers()
    playersSequence = []
    simonsSequence.push(randomNum)
    simonsSequence.forEach((color,idx) => {
          setTimeout(function(){
            if (color === numberGen[0])  {
                changeColor1()
                setTimeout(dimColor1,800)
             } else if (color=== numberGen[1])  {
                changeColor2()
                setTimeout(dimColor2,800)
             } else if  (color === numberGen[2])  {
                changeColor3()
                setTimeout(dimColor3,800)
             } else if  (color === numberGen[3])  {
                changeColor4()
                setTimeout(dimColor4,800)
             };
        },idx * 1000); 
    

    })
  
   
    }

SIMON.addEventListener('click', (event) => {
    const target = event.target;
  
if (target.classList.contains('START')) {   
    score = 0
    scoreEL.textContent = `roundwins:${score}` 
    loseMsg.textContent = ''
    loser = null
    playersSequence = []
    simonsSequence = []
    simonsequenceRender(target)
    catSays.volume = 1
    catSays.play()
}
})

redButtonEL.addEventListener('click', handleClick)
greenButtonEL.addEventListener('click', handleClick)
blueButtonEL.addEventListener('click', handleClick)
yellowButtonEL.addEventListener('click', handleClick)