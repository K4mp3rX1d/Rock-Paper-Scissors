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
            console.log('Tie!');
            return [0, 0];
        } else if (computerSelection === 'paper') {
            console.log("You Lose! Paper beats Rock");
            return [1, 0];
        } else if (computerSelection === 'scissors') {
            console.log("You Win! Rock beats Scissors");
            return [0, 1];
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'rock') {
            console.log("You Win! Paper beats Rock");
            return [0, 1];
        } else if (computerSelection === 'paper') {
            console.log("Tie!");
            return [0, 0];
        } else if (computerSelection === 'scissors') {
            console.log("You Lose! Scissors cut Paper");
            return [1, 0];
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'rock') {
            console.log("You Lose! Rock beats Scissors");
            return [1, 0];
        } else if (computerSelection === 'paper') {
            console.log("You Win! Scissors cut Paper");
            return [0, 1];
        } else if (computerSelection === 'scissors') {
            console.log("Tie!");
            return [0, 0];
        }
    }
}


function playGame() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i > 5; i++) {
        const playerSelection = prompt('Enter your choice: ').toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (computerScore) {
            computerScore++;
        } else {
            playerScore++;
        }
    }
    
    console.log(`
        Computer:   ${computerScore}
        Player  :   ${playerScore}

        ${computerScore > playerScore ? 'Computer' : 'You'} won the Game!!
    `);
}