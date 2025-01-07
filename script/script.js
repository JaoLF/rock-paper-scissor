let humanScore = 0; 
let computerScore = 0; 
let round = 0; 

const humanChoice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * humanChoice.length);
    return humanChoice[randomIndex];
}

function playSelection(humanChoice, computerChoice) {
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


function playRound(humanChoice) {
    const computerChoice = getComputerChoice(); 
    const result = playSelection(humanChoice, computerChoice); 
    
    if (result === true) {
        humanScore++; 
    } else if (result === false) {
        computerScore++; 
    }

    results.innerHTML = `
    <p> Round: ${round + 1}</p>
    <p>You: ${humanScore}</p>
    <p>Computer: ${computerScore}
    `; 
    
    // console.log(`Score: You ${humanScore} - Computer ${computerScore}`); 
    round++; 
    
    if (round === 5){
        endGame(); 
    }
}

function endGame() {
    console.log("End game!");
    console.log(`Final Score: You: ${humanScore} - Computer ${computerScore}`);
    
    results.innerHTML += `
    <h2>Game Over!<h2>
    <p>Final Score: You: ${humanScore} - Computer: ${computerScore}</p>
    `; 

    if (humanScore > computerScore) {
        results.innerHTML += "<p>You won the game!</p>";
    } else if (computerScore > humanScore) {
        results.innerHTML += "<p>You lost the game! The computer as won</p>";
    } else {
        innerHTML += "<p>It's a tie game!</p>";
    }

    humanScore = 0; 
    computerScore = 0; 
    round = 0; 
}

const container = document.querySelector("#container");
const results = document.createElement("div");
results.classList.add("results");
container.appendChild(results); 

const rock = document.querySelector("#rock");
rock.onclick = () => {
    playRound("rock"); 
};

const paper = document.querySelector("#paper");
paper.onclick = () => {
    playRound("paper"); 
};

const scissors = document.querySelector("#scissors");
scissors.onclick = () => {
    playRound("scissors");
};

