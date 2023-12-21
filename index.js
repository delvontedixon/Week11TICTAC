/*Coding Steps:
Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.
Create a Tic-Tac-Toe game grid using your HTML element of choice.
When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
A heading should say whether it is X's or O's turn and change with each move made.
A button should be available to clear the grid and restart the game.
When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.
*/
let currentPlayer = "X";
let playedSquares = [];
let xArray = [];
let oArray = [];

for (let i = 1; i <= 9; i++) {
  let square = document.getElementById(i);
  square.addEventListener("click", () => squareClicked(i));
}

function squareClicked() {
  if (!playedSquares.includes(i)) {
    /*This prevents duplicate values*/
    console.log(i, playedSquares);
  }
  let square = document.getElementById(i);
  square.innerText = currentPlayer;
  playedSquares.push(i);
  if (currentPlayer === "X") {
    xArray.push(i); /*If the current player plays X then it will switch to O*/
  } else {
    oArray.push(i);
  }
  if (currentPlayer === "X") {
    currentplayer = "O";
  } else {
    currentPlayer = "X";
  }

  console.log(playedSquares);
  console.log("Player X Squares ", xArray);
  console.log(
    "Player O Squares ",
    oArray
  ); /*This puts the resective squares in their arrays in the console*/
}
