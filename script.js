;



 const options = ['Rock', 'Scissors', 'Paper'];
 let playerScore = 0
 let computerScore = 0

/* Computer randomly chooses option */
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}
/* Player enters option*/
function playerPlay() {
    let playerChoice = prompt('Rock, Paper or Scissors?')
    return playerChoice;
}
/* One round of Rock, Paper, Scissors */
function playRound() {
        let computerSelection = computerPlay()
        let playerSelection = playerPlay()
    console.log(computerSelection)
    console.log(playerSelection)  
    
    if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Scissors') {
        console.log('You win!');
        playerScore++;
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Paper') {
        console.log('You lose!');
        computerScore++;
    } else if (playerSelection.toUpperCase() === 'ROCK' && computerSelection === 'Rock') {
        console.log('Draw!');
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Rock') {
        console.log('You win!');
        playerScore++;
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Scissors') {
        console.log('You lose!');
        computerScore++;
    } else if (playerSelection.toUpperCase() === 'PAPER' && computerSelection === 'Paper') {
        console.log('Draw!');
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Paper') {
        console.log('You win!');
        playerScore++;
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Rock') {
        console.log('You lose!');
        computerScore++;
    } else if (playerSelection.toUpperCase() === 'SCISSORS' && computerSelection === 'Scissors') {
        console.log('Draw!');
        }
}
/* 5 round game of Rock, Paper, Scissors */
function game () {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
        console.log('Player: ' + playerScore)
        console.log('Computer: ' + computerScore)

    if (playerScore > computerScore) {
        console.log('You Win the Game!')
    } else if (playerScore < computerScore) {
        console.log('You Lose the Game!')
    } else if (playerScore === 2 && computerScore === 2) {
        console.log('It\'s a draw!')
    }
}


game()

