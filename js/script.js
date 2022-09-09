let playerWins = 0;             //set up counters
let compWins = 0;

let playerSelection;

const container = document.querySelector('#container');

const selections = document.querySelector('#selections');

const rock = document.createElement('button');          //set up buttons
    rock.textContent = "Rock";
    rock.setAttribute('id', "rock");
    rock.classList.add("choice")

const paper = document.createElement('button');
    paper.textContent = "Paper";
    paper.setAttribute('id', "paper");
    paper.classList.add("choice")

const scissors = document.createElement('button');
    scissors.textContent = "Scissors";
    scissors.setAttribute('id', "scissors");
    scissors.classList.add("choice")

selections.appendChild(rock);
selections.appendChild(paper);
selections.appendChild(scissors);

let choices = document.querySelectorAll('.choice');         //activate game through buttons
    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
        playerSelection = `${choice.id}`; 
        game();
        });
    });

const results = document.querySelector('#results');
    results.textContent = '______';

const scores = document.querySelector('#score');

const playerScores = document.querySelector('#playerScore');
    playerScores.textContent = `Your score: ${playerWins}`;

const compScores = document.querySelector('#compScore');
    compScores.textContent = `Computer score: ${compWins}`;

const end = document.querySelector('#endGame');
    end.textContent = '______';

const startOver = document.createElement('button');
    startOver.textContent = "Start Over!";

container.appendChild(results);
container.appendChild(scores);
container.appendChild(end);
container.appendChild(startOver);


function playRound(playerSelection, computerSelection) {
    if ((playerWins >= 5) || (compWins >= 5)) {
        results.textContent = `______`;
    } else if (playerSelection == computerSelection) {
        playerWins++;
        compWins++;
        results.textContent = `You both selected ${playerSelection[0].toUpperCase() + playerSelection.substring(1)}. It's a tie!`;
    } else if ((playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")
    || (playerSelection == "rock" && computerSelection == "scissors")) {
        playerWins++;
        results.textContent = `You win! ${playerSelection[0].toUpperCase() + playerSelection.substring(1)} beats ${computerSelection}.`;
    } else if ((playerSelection == "scissors" && computerSelection == "rock") || (playerSelection == "rock" && computerSelection == "paper")
    || (playerSelection == "paper" && computerSelection == "scissors")) {
        compWins++;
        results.textContent = `You lose! ${computerSelection[0].toUpperCase() + computerSelection.substring(1)} beats ${playerSelection}.`; 
    } else {
        results.textContent = "Invalid - try again";
    }
}

function endGame(playerWins, compWins){ 
    if ((playerWins == 5) || (compWins == 5)) {
        if (playerWins > compWins) {
            end.textContent = `Game over! You won! Good job!`;
        }   else if (compWins > playerWins) {
            end.textContent = `Game over! The computer won! Better luck next time!`;
        }   else {
            end.textContent =  `Game over! You tied! Good job!`;
        };
    } else {
        end.textContent = `Play another round!`;
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

    playRound(playerSelection, computerSelection);
    endGame(playerWins, compWins);  

    playerScores.textContent = `Your score: ${playerWins}`;
    compScores.textContent = `Computer score: ${compWins}`;

    startOver.addEventListener('click', () => {
        playerWins = 0;
        compWins = 0;
        results.textContent = "______";
        playerScores.textContent = `Your score: ${playerWins}`;
        compScores.textContent = `Computer score: ${compWins}`;
        end.textContent = "______";
        });

}