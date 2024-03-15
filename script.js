function random(n) {
    return Math.floor(Math.random() * n);
}


function getComputerChoice() {
    let pick = ['rock', 'paper', 'scissors'];
    return pick[random(3)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return 'Tie!'
        } else if (computerSelection === 'paper') {
            return "You Lose! Paper beats Rock"
        } else if (computerSelection === 'scissors') {
            return "You Win! Rock beats Scissors"
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'rock') {
            return "You Win! Paper beats Rock"
        } else if (computerSelection === 'paper') {
            return "Tie!"
        } else if (computerSelection === 'scissors') {
            return "You Lose! Scissors cut Paper"
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'rock') {
            return "You Lose! Rock beats Scissors"
        } else if (computerSelection === 'paper') {
            return "You Win! Scissors cut Paper"
        } else if (computerSelection === 'scissors') {
            return "Tie!"
        }
    }
}


const playerSelection = prompt('Enter your choice: ').toLowerCase()
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));