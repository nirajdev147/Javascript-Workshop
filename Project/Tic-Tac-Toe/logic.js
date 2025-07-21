const gameboxs = document.querySelectorAll("[data-box]");
const gameBoard = document.getElementById("gameBoard");
const resultMessageBox = document.getElementById("resultMessage");
const resultText = document.getElementById("resultText");
const restartGameBtn = document.getElementById("restartGameBtn");
const newGameBtn = document.getElementById("newGameBtn");

let isCircleTurn = false; //track whose turn it is  false for "X" and true for "O"
let isGameOver = false;  //stops the game when someone wins or its a draw

// All possible winning combinations (rows, columns, diagonals)
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

// Start the game when the page loads
startGame();

// Button event listeners
restartGameBtn.addEventListener("click", () => startGame(false));
newGameBtn.addEventListener("click", () => startGame(true));


// Reset the board and state
function startGame(resetPlayer = false) {
  if (resetPlayer) isCircleTurn = false;        // Always start with X if new game

  isGameOver = false;  //the game is now active
  resultMessageBox.classList.remove("show");  //hide the result message
  gameBoard.classList.remove("X", "O"); //Remove any turn indicator
  setHoverEffect();  // Set the board hover effect for the current player

  //for each box on the board
  gameboxs.forEach(box => {
    box.classList.remove("X", "O"); //remove any X or O mark
    box.textContent = ""; // Clear box text
    box.removeEventListener("click", handleboxClick);  
    box.addEventListener("click", handleboxClick, { once: true });
  });
}

// When a gameboxs is clicked
function handleboxClick(event) {
  if (isGameOver) return;

  const clickedbox = event.target;
  const currentPlayer = isCircleTurn ? "O" : "X";

  placeMark(clickedbox, currentPlayer);

  if (checkWin(currentPlayer)) {
    endGame(false, currentPlayer);
  } else if (isDraw()) {
    endGame(true);
  } else {
    isCircleTurn = !isCircleTurn;  //Switch turns
    setHoverEffect();
  }
}

// Mark the box with X or O
function placeMark(box, player) {
  box.classList.add(player);     // Add class for color
  box.textContent = player;      // Display the value (X or O)
}

// Show whose turn it is with a board hover effect
function setHoverEffect() {
  gameBoard.classList.remove("X", "O");
  gameBoard.classList.add(isCircleTurn ? "O" : "X");
}

//check is the current player has won
function checkWin(player) {
  return winningPatterns.some(pattern => {
    return pattern.every(index =>
      gameboxs[index].classList.contains(player)
    );
  });
}

function isDraw() {
  return [...gameboxs].every(box =>
    box.classList.contains("X") || box.classList.contains("O")
  );
}


// show result and stop the game
function endGame(draw, winner = null) {
  isGameOver = true;
  if (draw) {
    resultText.textContent = "🤝 It's a Draw!";
  } else {
    const loser = winner === "X" ? "O" : "X";
    resultText.textContent = `🎉 ${winner} Wins! 😞 ${loser} Loses!`;
  }

  resultMessageBox.classList.add("show");

  // Disable further moves
  gameboxs.forEach(box => {
    box.removeEventListener("click", handleboxClick);
  });
}
