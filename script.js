
 const options = ['Rock', 'Scissors', 'Paper'];
 let playerScore = 0
 let computerScore = 0

/* Computer randomly chooses option */
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

/* Button functionality */

 const btn = document.querySelectorAll('.Button').forEach((btn) => {
    btn.addEventListener('click', () => {
        playRound(btn.id,computerPlay());
    });
});

/* One round of Rock, Paper, Scissors */
function playRound(playerSelection, computerSelection) {

    console.log(computerSelection)
    console.log(playerSelection)
    console.log(playerScore)
    let resultDeclaration = ""  
    
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Scissors') {
        resultDeclaration = "Your rock blunts the computers scissors";
        playerScore++; console.log(playerScore);
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Paper') {
        resultDeclaration = "The computer carefully wraps your rock with paper";
        computerScore++;
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Rock') {
        resultDeclaration = "Two rocks pointlessly bump together";
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Rock') {
        resultDeclaration = "Your paper envelops the computer's useless rock";
        playerScore++;
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Scissors') {
        resultDeclaration = "The computer takes a pair of scissors and splits your paper in two";
        computerScore++;
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Paper') {
        resultDeclaration = "You and the computer create a pile";
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Paper') {
        resultDeclaration = "You easily snip the computers paper";
        playerScore++;
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Rock') {
        resultDeclaration = "The computer uses a rock to counter your cut";
        computerScore++;
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Scissors') {
        resultDeclaration = "You and the computer scissor each other";
        }
        printResult(resultDeclaration)

}


/* Create element for displaying results and print function */
const result = document.querySelector('#result');
const content = document.createElement('div');
const score = document.querySelector('#Score');

function printResult(resultOutput) {
    content.textContent = resultOutput;
    result.appendChild(content);
    score.innerText = playerScore + " - " + computerScore
        if (playerScore >= 5) {
            content.textContent = 'Congratulations!'
            result.appendChild(content)
            content.style.backgroundColor = '#121212';
            content.style.color = '#F52F57';
            content.style.lineHeight = 2;
            content.style.fontSize = '200%';
            
        } else if (computerScore >= 5) {
            content.textContent = 'Commiserations.'
            result.appendChild(content)
            content.style.backgroundColor = '#F52F57';
            content.style.color = '#EDEDf4';
            content.style.lineHeight = 2;
            content.style.fontSize = '200%';
        }

}



