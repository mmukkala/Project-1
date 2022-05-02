let userInput = prompt("How many rounds?", parseInt());

for (let i = 0; i <userInput; i++) {
    let userChoice = prompt("rock, paper, or scissors?(enter r, p or s)");


    if (userChoice == "r"){
        userChoice == 'rock'
    } else if (userChoice = "p"){
        userChoice == 'paper'
    } else {userChoice == 'sissors'}

let randomNumber = Math.ceil(Math.random() *2);
    let computerChoice = randomNumber
    if (computerChoice == 0){
        computerChoice == 'rock'
    } else if (computerChoice = 1){
        computerChoice == 'paper'
    } else {computerChoice == 'sissors'}


    if (userChoice === computerChoice){
        ties++;
        alert ('this game was a tie');
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        computerScore++
        alert ('You lost')
      } else {
        userScore++;
        alert ('You won!');
      }
    }

    if (userChoice === 'paper'){
      if (computerChoice === 'scissors') {
        computerScore++
        alert ('You lost')
      } else {
        userScore++;
        alert ('You won!');
      }
    }

    if (userChoice === 'scissors'){
      if (computerChoice ==='rock'){
        computerScore++
        alert ('You lost')
      } else {
        userScore++;
        alert ('You won!');
      }
    }
    let userScore = 0;
    let computerScore = 0;
    let ties = 0;
} alert ("Wins: " + userScore + " Losses: " + computerScore + " Ties: " + ties);