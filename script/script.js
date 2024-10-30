const choice = ['rock', 'paper', 'scissors'];

function getHumanChoice() {
    const humanChoice = prompt("Choose between rock, paper and scissors");
    switch (humanChoice.toLowerCase()) {
        case 'rock':
            return "rock";

        case 'paper':
            return "paper";

        case 'scissors':
            return "scissors";

        default:
            alert("Invalid choice");
            return getHumanChoice();
    }
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("Game tied!");
        return null; 
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log("You lose! Rock not beats paper")
        return false; 
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log("You won! Paper beat rock");
        return true; 
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log("You won! Rock beat scissors");
        return true; 
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log("You lose! Scissors not beat rock");
        return false; 
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log("You lose! Paper not beat scissors");
        return false; 
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You won! Scissors beat paper");
        return true; 
    } else {
        console.log("Invalid choice!"); 
        return null; 
    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${round}: You chose ${humanChoice} and the Computer chose ${computerChoice}`);

        const result = playRound(humanChoice, computerChoice);


        if (result === true) {
            console.log("You won this round!");
            humanScore++;
        } else if (result === false) {
            console.log("You lost this round!");
            computerScore++;
        } else {
            console.log("This round is tied!");
        }

        console.log(`Score after the round ${round} - You: ${humanScore} - Computer: ${computerScore}`);
    }
    console.log("End game!");
    console.log(`Final Score: You: ${humanScore} - Computer ${computerScore}`);
 
    if (humanScore > computerScore) {
        console.log("You won the game!"); 
    } else if (computerScore > humanScore) {
        console.log("You lost the game! The computer as won"); 
    } else {
        console.log("It's a tie game!"); 
    }
}

playGame();
