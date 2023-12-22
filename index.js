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
let winningCombos = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [7, 5, 3],
];

function checkWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    for (let x = 0; x < winningCombos[i].length; x++) {
      if (playedSquares.length != 9) {
        console.log("NO WINNER");
      }
      if (
        xArray.includes(winningCombos[i][0]) &&
        xArray.includes(winningCombos[i][1]) &&
        xArray.includes(winningCombos[i][2])
      ) {
        console.log(`${currentPlayer} is the WINNER`);
        alert("X Player is the winner");
      } else if (
        oArray.includes(winningCombos[i][0]) &&
        oArray.includes(winningCombos[i][1]) &&
        oArray.includes(winningCombos[i][2])
      ) {
        console.log(`${currentPlayer} is the WINNER`);
        alert("O Player is the winner");
      }
    }
  }
}

for (let i = 1; i <= 9; i++) {
  let square = document.getElementById(i);
  square.addEventListener("click", () => squareClicked(i));
}

function squareClicked(i) {
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
  checkWinner();
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}
