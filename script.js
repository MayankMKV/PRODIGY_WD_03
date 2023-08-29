let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function makeMove(cellIndex) {
  if (board[cellIndex] === "" && !checkWin(currentPlayer)) {
    board[cellIndex] = currentPlayer;
    document.getElementsByClassName("cell")[cellIndex].innerText = currentPlayer;
    
    if (checkWin(currentPlayer)) {
      alert(`${currentPlayer} wins!`);
    } else if (board.every(cell => cell !== "")) {
      alert("It's a draw!");
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin(player) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6]           // diagonals
  ];

  return winPatterns.some(pattern =>
    pattern.every(cellIndex => board[cellIndex] === player)
  );
}

function resetBoard() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
}
