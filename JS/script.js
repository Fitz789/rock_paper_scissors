//set up counters
let playerWins = 0
let compWins = 0

//evaluate rock paper scissors winner from player input and computer input
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        playerWins +=1;
        compWins +=1;
        return `It's a tie! Your score: ${playerWins}, Computer score: ${compWins}`;
    } else if ((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")
    || (playerSelection == "rock" && computerSelection == "scissors")) {
        playerWins +=1;
        return `You win! ${playerSelection} beats ${computerSelection}. Your score: ${playerWins}, Computer score: ${compWins}`;
    } else if ((playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "paper")
    || (playerSelection == "paper" && computerSelection == "scissors")) {
        compWins +=1;
        return `You lose! ${computerSelection} beats ${playerSelection}. Your score: ${playerWins}, Computer score: ${compWins}`;
    } else {
        return "Invalid - try again";
    }
}

//ending message
function end(){
    if (playerWins > compWins) {
        console.log(`Game over! You won! Good job!`);
    } else if (compWins > playerWins) {
        console.log(`Game over! The computer won! Better luck next time!`);
    } else if ((compWins == playerWins) && (compWins > 0 || playerWins > 0)) {
        console.log(`Game over! You tied! Good job!`);
    } else {
        console.log(`Game aborted. Refresh to start over.`)
    }
    }

//
function game() {
//setting up loop
    for (let i = 0; i < 5; i++) {
        //Create function getRandomInt to return a random integer 1, 2, or 3
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        
        //Create variable randomInt to store function getRandomInt
        const randomInt = getRandomInt(3);

        //Create function getComputerChoice to randomly return variable 'Rock', 'Paper', or 'Scissors' based on the integer
        function getComputerChoice() {
            if(randomInt === 0) {
                return "rock";
            } else if(randomInt === 1) {
                return "paper";
            } else {
                return "scissors";
            }
            }

        //Create variable computerSelection with value being the output of getComputerChoice()
        const computerSelection = getComputerChoice();


        //Ask user for input rock, paper, or scissors, and store in variable "playerSelection"        
        playerSelection = prompt("Rock, paper, or scissors?")
        if (playerSelection) {
            playerSelection.toLowerCase();
        } else {
            break;
        }

        //call playRound function and print result to console
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
}
end();
}

game()
