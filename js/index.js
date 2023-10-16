const container = document.querySelector("#container")
const gameRoundSpan = document.querySelector("#game-round-count")
const userScoreSpan = document.querySelector("#user-score")
const computerScoreSpan = document.querySelector("#computer-score")
const playerChoices = document.querySelectorAll(".choice")
const resultOutput = document.querySelector("#result")

let round = 1, userScore = 0, computerScore = 0

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

function disableButtons() {
    playerChoices.forEach(choice => {
        choice.disabled = true
    })
}

function addPlayAgainButton() {
    const btn = document.createElement("button")
    btn.textContent = "Play again"
    btn.style.color = "green"
    container.appendChild(btn)
    btn.addEventListener("click", event => {
        window.location.reload()  
    })
}

playerChoices.forEach(choice => {
    choice.addEventListener("click", event => {
        if (userScore > 4) {
            resultOutput.textContent = "Congratulations you beat the computer in Rock Paper Scissors!"
            resultOutput.style.color = "red"
            addPlayAgainButton()
            disableButtons()
        } 
        else if (computerScore > 4) {
            resultOutput.textContent = "You just lost to a computer in Rock Paper Scissors!"
            resultOutput.style.color = "red"
            addPlayAgainButton()
            disableButtons()
        } 
        else {
            const result = playSingleRound(event.target.id, getComputerChoice())

            if (result == "W") {
                resultOutput.textContent = `Round Won!`
                userScore++
            } else if (result == "L") {
                resultOutput.textContent = `Round Lost!`
                computerScore++
            } else {
                resultOutput.textContent = "Draw!"
            }
            round++
            userScoreSpan.textContent = userScore
            computerScoreSpan.textContent = computerScore
            gameRoundSpan.textContent = round
        }
    })
})
