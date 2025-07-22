let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

const drawGame = () => {
  msg.textContent = "It's a Draw! Try Again.";
  msg.style.backgroundColor = "#070600";
};

const updateScore = (winner, userChoice, compChoice) => {
  if (winner === "user") {
    userScore++;
    userScorePara.textContent = userScore;
    msg.textContent = `You Won! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.textContent = compScore;
    msg.textContent = `You Lost! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const determineWinner = (user, comp) => {
  if (user === comp) return "draw";
  if (
    (user === "rock" && comp === "scissors") ||
    (user === "paper" && comp === "rock") ||
    (user === "scissors" && comp === "paper")
  ) {
    return "user";
  } else {
    return "comp";
  }
};

const playGame = (userChoice) => {
  const compChoice = getComputerChoice();
  const result = determineWinner(userChoice, compChoice);

  if (result === "draw") {
    drawGame();
  } else {
    updateScore(result, userChoice, compChoice);
  }
};

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    playGame(choice.id);
  });
});
