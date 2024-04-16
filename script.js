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
        messageBox.innerHTML = '<p>Tie!</p>';
        return [0, 0];
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        messageBox.innerHTML = '<p>Paper beats Rock!</p>';
        return [0, 1];
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        messageBox.innerHTML = '<p>Rock beats Scissors!</p>';
        return [1, 0]
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        messageBox.innerHTML = '<p>Paper beats Rock!</p>';
        return [1, 0]
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        messageBox.innerHTML = '<p>Scissors cut paper!</p>';
        return [0, 1]
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        messageBox.innerHTML = '<p>Rock beats Scissors!</p';
        return [0, 1]
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        messageBox.innerHTML = '<p>Scissors cut Paper!</p>';
        return [1, 0];
    };
}

function updateChoices() {
    for (let i = 0; i < players.length; i++) {
        const li = document.createElement('li');
        li.textContent = arguments[i];
        players[i].appendChild(li);
    };
}

function updateScore(points) {
    scores[0] += points[0];
    scores[1] += points[1];
    playerScore.textContent = scores[0];
    computerScore.textContent = scores[1];
}

function resetGame() {
    scores = [0, 0];
    messageBox.textContent = '';
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    players.forEach((x) => {
        while (x.children.length) {
            x.removeChild(x.firstChild);
        }
    });
    buttons.forEach((button) => {
        button.removeAttribute('disabled');
    })
}


function playGame(event) {
    const playerSelection = event.target.innerHTML.toLowerCase();
    const computerSelection = getComputerChoice();
    updateChoices(playerSelection, computerSelection);
    const result = playRound(playerSelection, computerSelection);
    updateScore(result);
    const replayButton = document.createElement('button');
    replayButton.textContent = 'Play Again';
    replayButton.addEventListener('click', resetGame);

    if (scores[0] >= 5) {
        buttons.forEach((button) => {
            button.setAttribute('disabled', 'disabled');
        });
        messageBox.innerHTML = '<h2>You Won!</h2>';
        messageBox.appendChild(replayButton);
    } else if (scores[1] >= 5) {
        buttons.forEach((button) => {
            button.setAttribute('disabled', 'disabled');
        });
        messageBox.innerHTML = '<h2>Better Luck Next Time!</h2>';
        messageBox.appendChild(replayButton);
    }
}
 

//Global Variables & Event Handlers:
let scores = [0, 0];
const buttons = document.querySelectorAll('button');
const players = document.querySelectorAll('.choices');
const messageBox = document.querySelector('.message-box');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        event.preventDefault();
        playGame(event);
    }, false);
});