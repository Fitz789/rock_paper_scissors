//set up counters
let playerWins = 0;
let compWins = 0;

let playerSelection;

const container = document.querySelector('#container');

const rock = document.createElement('button');
rock.textContent = "Rock";
rock.setAttribute('id', "rock");

const paper = document.createElement('button');
paper.textContent = "Paper";
paper.setAttribute('id', "paper");

const scissors = document.createElement('button');
scissors.textContent = "Scissors";
scissors.setAttribute('id', "scissors");

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
    playerSelection = `${button.id}`; 
    game();
    });
});

function playRound(playerSelection, computerSelection) {
    if ((playerWins >= 5) || (compWins >= 5)) {
        return `Winner already determined.`;
    } else if (playerSelection == computerSelection) {
        return `It's a tie! Your score: ${playerWins+=1}, Computer score: ${compWins+=1}`;
    } else if ((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")
    || (playerSelection == "rock" && computerSelection == "scissors")) {
        return `You win! ${playerSelection[0].toUpperCase() + playerSelection.substring(1)} beats ${computerSelection}. Your score: ${playerWins+=1}, Computer score: ${compWins}`;
    } else if ((playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "paper")
    || (playerSelection == "paper" && computerSelection == "scissors")) {
        return `You lose! ${computerSelection[0].toUpperCase() + computerSelection.substring(1)} beats ${playerSelection}. Your score: ${playerWins}, Computer score: ${compWins+=1}`;
    } else {
        return "Invalid - try again";
    }
}


function endGame(playerWins, compWins){
    if ((playerWins > 5) || (compWins > 5)) {
    return "The game is over.";   
    } else if ((playerWins == 5) || (compWins == 5)) {
        if (playerWins > compWins) {
            return `Game over! You won! Good job!`;
        }   else if (compWins > playerWins) {
            return `Game over! The computer won! Better luck next time!`;
        }   else {
            return `Game over! You tied! Good job!`;
        };
    } else {
        return `Play another round!`;
    }
}

function game() {
        function getRandomInt(max) {         //Create function getRandomInt to return a random integer 1, 2, or 3
            return Math.floor(Math.random() * max);
        }
    
    const randomInt = getRandomInt(3);         //Create variable randomInt to store function getRandomInt

    function getComputerChoice() {             //Create function getComputerChoice to randomly return variable 'Rock', 'Paper', or 'Scissors' based on the integer
            if(randomInt === 0) {
                return "rock";
            } else if(randomInt === 1) {
                return "paper";
            } else {
                return "scissors";
            }
            }

    const computerSelection = getComputerChoice();              //Create variable computerSelection with value being the output of getComputerChoice()

        

    const results = document.createElement('div');
    results.textContent = `${playRound(playerSelection, computerSelection)}`;
    container.appendChild(results);
    const end = document.createElement('div');
    end.textContent = `${endGame(playerWins, compWins)}`;
    container.appendChild(end);
}
