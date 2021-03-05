'use strict';

const newGameProc = function(){
    scoreEls[0].innerHTML = '0';
    scoreEls[1].innerHTML = '0';
    currScoreEls[0].innerHTML = '0';
    currScoreEls[1].innerHTML = '0';
    diceEl.classList.add('hidden');
    if(wonGame)
        playerSectionEls[currentPlayer].classList.remove('player--winner');
    else
        playerSectionEls[currentPlayer].classList.remove('player--active');
    playerSectionEls[0].classList.add('player--active');
    currentPlayer = 0;
    wonGame = false;
    return;
}

const diceRollProc = function(){
    if(wonGame) return;

    const diceRoll = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = 'dice-'+diceRoll+'.png';
    if(diceEl.classList.contains('hidden'))
        diceEl.classList.remove('hidden');

    if(diceRoll == 1){
        currScoreEls[currentPlayer].innerHTML = 0;
        return changeTurnProc();
    }
    else{
        const currentScore = parseInt(currScoreEls[currentPlayer].innerHTML);
        currScoreEls[currentPlayer].innerHTML = currentScore + diceRoll;
        return;
    }
}

const holdScoreProc = function(){
    if(wonGame) return;

    const currentScore = parseInt(currScoreEls[currentPlayer].innerHTML);
    const score = parseInt(scoreEls[currentPlayer].innerHTML);
    currScoreEls[currentPlayer].innerHTML = 0;
    scoreEls[currentPlayer].innerHTML = currentScore + score;

    if(currentScore+score < 100)
        return changeTurnProc();
    else
        return victoryProc();
}

const changeTurnProc = function(){
    playerSectionEls[currentPlayer].classList.remove('player--active');
    currentPlayer = (currentPlayer) ? (0) : 1;
    playerSectionEls[currentPlayer].classList.add('player--active');
    return;
}

const victoryProc = function(){
    playerSectionEls[currentPlayer].classList.add('player--winner');
    diceEl.classList.add('hidden');
    wonGame = true;
    return;
}

// Element selection
const playerSectionEls = document.querySelectorAll('.player');
const scoreEls = document.querySelectorAll('.score');
const currScoreEls = document.querySelectorAll('.current-score');
const diceEl = document.querySelector('.dice');
const newBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

// System variables
let currentPlayer = 0;
let wonGame = false;

// Starting new game
newGameProc();

// Event creation
newBtn.addEventListener('click', newGameProc);
rollBtn.addEventListener('click', diceRollProc);
holdBtn.addEventListener('click', holdScoreProc);
