//set up counters
let playerWins = 0
let compWins = 0


//evaluate rock paper scissors winner from player input and computer input
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        playerWins +=1;
        compWins +=1;
        return `It's a tie! Your wins: ${playerWins}, Computer wins: ${compWins}`;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerWins +=1;
        return `You win! Paper beats rock. Your wins: ${playerWins}, Computer wins: ${compWins}`;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        compWins +=1;
        return `You lose! Rock beats scissors. Your wins: ${playerWins}, Computer wins: ${compWins}`;
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        compWins +=1;
        return `You lose! Paper beats rock. Your wins: ${playerWins}, Computer wins: ${compWins}`;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerWins +=1;
        return `You win! Scissors beat paper. Your wins: ${playerWins}, Computer wins: ${compWins}`;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerWins +=1;
        return `You win! Rock beats scissors. Your wins: ${playerWins}, Computer wins: ${compWins}`;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        compWins +=1;
        return `You lose! Scissors beat paper. Your wins: ${playerWins}, Computer wins: ${compWins}`;
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
    } else if (compWins == playerWins) {
        console.log(`Game over! You tied! Good job!`);
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
            console.log(getComputerChoice());

        //Create variable computerSelection with value being the output of getComputerChoice()
        const computerSelection = getComputerChoice();
        console.log(computerSelection);

        //Ask user for input rock, paper, or scissors, and store in variable "playerSelection"        
        playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();

        //call playRound function and print result to console
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
}
end();
}



game()

//create variable to count player wins
//create variable to count computer wins
//increment


//Create function round to play 1 round of RPS; 
    //if computerSelection === playerSelection, output "It's a tie!"

    //if computerSelection === rock,
        //if playerSelection === paper, output "You win! Paper beats rock."
        //if playerSelection === scissors, output "You lose! Rock beats scissors."

    //if computerSelection === paper,
        //if playerSelection === rock, output "You lose! Paper beats rock."
        //if playerSelection === scissors, output "You win! Scissors beat paper."

    //if computerSelection === scissors,
        //if playerSelection === rock, output "You win! Rock beats scissors."
        //if playerSelection === paper, output "You lose! Scissors beat paper."


  



//Create function game to play a 5 round game that keeps score and reports a winner or loser at the end

//begin with sentry at start and add change to sentry on each pass until sentry is larger than or equal to finish
//when a user completes a round, add 1
//if the number is < 5, continue loop
//if number is >= 5, print winner and exit.