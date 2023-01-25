//get a random choice for rock paper scissors game
function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];

  //selct a random item form the array cpuChoices
  const randomIndex = Math.floor(Math.random() * computerChoices.length);

  const computerChoice = computerChoices[randomIndex];

  console.log("Your opponent choose " + computerChoice);
  return computerChoice;
}

//play a round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("You tied this round");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You won this round, gret job!");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You won this round, gret job!");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You won this round, gret job!");
  } else {
    console.log("You lost, better luck next time.");
  }
}

//play 5 rounds and keep track of the score then report a winner
function game() {
  player = 0;
  computer = 0;
  for (let i = 0; i < 5; i++) {
    let userChoice = prompt("Choose rock, paper or scissors at your own risk!");

    //makes the playerSelection case insensitive
    let lowerCaseUserChoice = userChoice.toLowerCase();
    playRound(lowerCaseUserChoice, getComputerChoice());
  }
}
