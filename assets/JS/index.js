const buttons = document.getElementsByClassName("controls");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const playerImage = document.getElementById("player-img");
const computerImage = document.getElementById("computer-img");
const choices = ["Rock", "Paper", "Scissors"];

//* Add Event Listener for buttons *//

for (let button of buttons) {button.addEventListener("click", function () {
    let playerchoice = this.getattribute("data-choice");
    playGame(playerchoice);
});
}

//* main game function *//

function playGame(playerchoice) {
    playerImage.src = assets/images/$choices[playerchoice]}.png ;
    playerImage.alt = choices[playerChoice]
