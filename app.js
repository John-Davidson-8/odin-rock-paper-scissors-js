// Our first task for creating a game of Rock, Paper, Scissors between the computer and competitor is to write a function that allows the computer to randomly pick one of three elements that are contained within the array variable items. The random return value and syntax is new to me it is variation of tbe math-random function.

function getComputerChoice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// Second task is create and array with items(elements) for computer and player to choose from.

let items = ["Rock", "Paper", "Scissors"];
console.log(getComputerChoice(items));

// Third task is to set up a function to play the game using if, else if statements with returns. Within this function there must be a way of gaining human players' input, I will use a prompt for this. The string elements, "Rock" etc will act as values, these values are contained within the items array.

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();
  playerSelection = prompt(
    "Choose your weapon: Rock, Paper or Scissors?"
  ).toLocaleLowerCase();
  
  if (playerSelection === "Rock" && computerSelection === "Paper") { 
  return "You lose! Paper beats Rock";
}
  else if 
}

// playerSelection = "Rock";
// prompt(playerSelection);
