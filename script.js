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
        return'<h2>Tie!<h2>'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return'<h2>You Lose!!</h2><p>Paper beats Rock!</p>'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return'<h2>You Win!!</h2><p>Rock beats Scissors!</p>'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return'<h2>You Win!!</h2><p>Paper beats Rock!</p>'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return'<h2>You Lose!!</h2><p>Scissors cut paper!</p>'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return'<h2>You Lose!!</h2><p>Rock beats Scissors!</p>'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return'<h2>You Win!!</h2><p>Scissors cut Paper!</p>'
    }
}


function playGame(event) {
    const playerSelection = event.target.innerHTML.toLowerCase();
    const computerSelection = getComputerChoice();
    const players = document.querySelectorAll('.choice');
    const result = document.querySelector('.message');

    players[0].textContent = playerSelection.toUpperCase();
    players[1].textContent = computerSelection.toUpperCase();
    result.innerHTML = playRound(playerSelection, computerSelection);
}


// HTML Elements & Event Handlers
buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        playGame(event);
    }, false);
});