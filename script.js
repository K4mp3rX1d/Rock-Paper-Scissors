// Function declarations
function random(n) {
    return Math.floor(Math.random() * n);
}


function getComputerChoice() {
    let pick = ['rock', 'paper', 'scissors'];
    return pick[random(3)];
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return'Tie!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return'You Lose!! Paper beats Rock!'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return'You Win!! Rock beats Scissors!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return'You Win!! Paper beats Rock!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return'You Lose!! Scissors cut paper!'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return'You Lose!! Rock beats Scissors!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return'You Win!! Scissors cut Paper!'
    }
}


function playGame(event) {
    const playerSelection = event.target.innerHTML.toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(`
        Player:     ${playerSelection.toUpperCase()}
        Computer:   ${computerSelection.toUpperCase()}
        ${playRound(playerSelection, computerSelection)};
    `);
}


// HTML Elements & Event Handlers
buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        playGame(event);
    });
});