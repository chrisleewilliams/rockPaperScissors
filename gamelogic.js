//get a random choice for rock paper scissors game
function getComputerChoice() {
  const computerChoices = ["rock", "paper", "scissors"];

  //selct a random item from the array computerChoices
  const randomIndex = Math.floor(Math.random() * computerChoices.length);

  const computerChoice = computerChoices[randomIndex];

  console.log("Your opponent choose " + computerChoice);
  return computerChoice;
}

//play a round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  let victoryPhrase = "You won this round, great job!";
  if (playerSelection === computerSelection) {
    console.log("You tied this round");
    return 0;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(victoryPhrase);
    return 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(victoryPhrase);
    return 1;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(victoryPhrase);
    return 1;
  } else {
    console.log("You lost this round, better luck next time.");
    return -1;
  }
}

//play 5 rounds and keep track of the score then report a winner
function game() {
  playerScore = 0;
  for (let i = 0; i < 5; i++) {
    let userChoice = prompt("Choose rock, paper or scissors at your own risk!");

    //makes the playerSelection case insensitive
    let lowerCaseUserChoice = userChoice.toLowerCase();

    //logic to keep track of score
    playerScore += playRound(lowerCaseUserChoice, getComputerChoice());
  }
  if (playerScore < 0) {
    console.log("You lost this game. Would you like to try again?");
  } else if (playerScore === 0) {
    console.log("You tied this time. Good Game!");
  } else console.log("YOU WON!!!");
}
