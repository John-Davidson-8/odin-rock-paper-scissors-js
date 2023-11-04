// Our first task for creating a game of Rock, Paper, Scissors between the computer and competitor is to write a function that allows the computer to randomly pick one three elements that are contained within the array variable items. The random return value and syntax is new to me it is variation of tbe math-random function.

function getComputerChoice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

var items = ["Rock", "Paper", "Scissors"];
console.log(getComputerChoice(items));
