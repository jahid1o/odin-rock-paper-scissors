function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors']
    let choice = Math.floor(Math.random() * 3)
    return choices[choice]
}

function playSingleRound(playerSelection, computerSelection){
    p = playerSelection.toLowerCase()
    c = computerSelection.toLowerCase()

    if (p == c){
        console.log("Draw!")
    }
    else if ((p == 'rock' && c == 'paper') || (p == 'paper' && c == 'scissors') || (p == 'scissors' && c == 'rock')){
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else{
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
}
