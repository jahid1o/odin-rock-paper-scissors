
function game(){
    function getComputerChoice() {
        let choices = ['Rock', 'Paper', 'Scissors'];
        let choice = Math.floor(Math.random() * 3);
        return choices[choice];
    }
    
    function playSingleRound(playerSelection, computerSelection){
        p = playerSelection.toLowerCase();
        c = computerSelection.toLowerCase();
    
        if (p == c){
            return 'D';
        }
        else if ((p == 'rock' && c == 'paper') || (p == 'paper' && c == 'scissors') || (p == 'scissors' && c == 'rock')){
            return 'L';
        }
        else{
            return 'W';
        }
    }
    
    let playerScore = 0, computerScore = 0;

    for (let round = 0; round < 5; round++){
        let userChoice;
        while (true) {
            userChoice = prompt(`Round ${round+1}.\nYour turn. Chose either rock, paper or scissors.`).toLocaleLowerCase();

            if ((userChoice == 'rock') || (userChoice == 'paper') || (userChoice == 'scissors')){
                break;
            }
            console.warn("Please make sure your input is either rock, paper or scissors!");
        }
        let computerChoice = getComputerChoice();
        let result = playSingleRound(userChoice, computerChoice);

        if (result == 'W'){
            console.log(`You Win! ${userChoice} beats ${computerChoice}`);
            playerScore++;
        }
        if (result == 'L'){
            console.log(`You Lose! ${computerChoice} beats ${userChoice}`);
            computerScore++;
        }
        else {
            console.log('Draw!');
        }
    }
    console.log(`scores -> user:${playerScore} computer:${computerScore}`);
}

game()