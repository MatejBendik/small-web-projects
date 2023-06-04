const buttons = document.querySelectorAll("button");
const resultEl = document.querySelector("#result");
const playerScoreEl = document.querySelector("#user-score");
const computerScoreEl = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());

    resultEl.textContent = result;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
  });
});

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  let result = "";

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      result = "You lose! Paper beats rock.";
      computerScore++;
    } else {
      result = "You win! Rock beats scissors.";
      playerScore++;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      result = "You lose! Scissors beats paper.";
      computerScore++;
    } else {
      result = "You win! Paper beats rock.";
      playerScore++;
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "You lose! Rock beats scissors.";
      computerScore++;
    } else {
      result = "You win! Scissors beats paper.";
      playerScore++;
    }
  }
  return result;
}
