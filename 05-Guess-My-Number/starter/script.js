'use strict';

let rndNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', buttonLogic);
document.querySelector('.again').addEventListener('click', againLogic);

function buttonLogic() {
    const guess = document.querySelector('.guess').value;

    // When there's no number
    if (!guess){
        document.querySelector('.message').textContent = "No Number!";
        return;
    }

    // When the number is outside the boundaries of the game
    const num_guess = parseInt(guess);
    if (num_guess < 1 || num_guess > 20){
        document.querySelector('.message').textContent = "Out of Boundaries Number!";
        return;
    }

    // Normal game logic
    return gameLogic(num_guess);
}

function gameLogic(guess){    
    const score = document.querySelector('.score').textContent;
    // Win Condition
    if(guess === rndNumber){
        document.querySelector('.message').textContent = "Right Number, You Won!";
        const highScore = document.querySelector('.highscore').textContent;
        if(score > highScore){
            document.querySelector('.highscore').textContent = score;
        }
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').textContent = rndNumber;
        return;
    }
    // Wrong number
    else{
        document.querySelector('.score').textContent = score - 1;
        if(guess < rndNumber){
            document.querySelector('.message').textContent = "Wrong Number, Try Higher!";
        }
        else{
            document.querySelector('.message').textContent = "Wrong Number, Try Lower!";
        }
        return;
    }
}

function againLogic(){
    rndNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
    return;
}