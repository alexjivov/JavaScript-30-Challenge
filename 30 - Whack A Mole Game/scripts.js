const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole;
let timeUp = false;
let score = 0; 

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) { // 'get me random DOM elements'
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
 

    if(hole === lastHole) { //stops the same hole from repeating
        console.log('No thats the same one!');
        return randomHole(holes); 
    }
    // example of recursion
    lastHole = hole;  // save the reference to what hole ran the last time it was run
    return hole;
} 

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) peep();
  
    }, time);
}

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false;
    peep();
    setTimeout(() => timeUp = true, 10000)
    score = 0;

}

function bonk(e) {
    if(!e.isTrusted) return; // cheating control
    score++;
    this.classList.remove('up');
    scoreBoard.textContent = score; 
}

moles.forEach(mole => mole.addEventListener('click', bonk));