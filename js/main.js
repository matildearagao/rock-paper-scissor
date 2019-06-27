//put choices in array
const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreboard = {
  player: 0,
  computer: 0
};

//Play game
function play(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();

  const winner = getWinner(playerChoice, computerChoice);

  showWinner(winner, computerChoice);
}

function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === "player") {
    //Inc player score
    scoreboard.player++;
    //show modal result
    result.innerHTML = `
      <h1 class="text-win">You win</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose ${computerChoice}</p>
      `;
  } else if (winner === "computer") {
    //Inc computer score
    scoreboard.computer++;
    //show modal result
    result.innerHTML = `
       <h1 class="text-lose">Computer win</h1>
       <i class="fas fa-hand-${computerChoice} fa-10x"></i>
       <p>Computer Chose ${computerChoice}</p>
       `;
  } else {
    result.innerHTML = `
      <h1>It's a draw</h1>
      <i class="fas fa-hand-${computerChoice} fa-10x"></i>
      <p>Computer Chose ${computerChoice}</p>
      `;
  }
  //Show score
  score.innerHTML = `
  <p>Player: ${scoreboard.player}</p>;
  <p>Computer: ${scoreboard.computer}</p>;
  `;

  modal.style.display = 'block';
}

//Restart game
function restartGame(e){
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `
}

//Close Modal
function closeModal(e){
  if(e.target ==modal){
    modal.style.display = 'none';
  }
}

//Event listeners
choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener('click', closeModal)
restart.addEventListener('click', restartGame);