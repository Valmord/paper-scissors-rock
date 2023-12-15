const choices = ['paper','scissors','rock'];
const whoBeats = {
  'paper': 'rock',
  'rock': 'scissors',
  'scissors': 'paper'
}
let score = {
  wins: 0,
  losses: 0,
  draws: 0
}

function getComputerChoice(){
  return choices[Math.floor(Math.random()*3)];
}

function getPlayerChoice(){
  let playerChoice;
  while(true){
    playerChoice = prompt("Enter:\n'paper', 'scissors' or 'rock'\nor press 'q' to quit.")
    if (choices.includes(playerChoice) || playerChoice === 'q' || playerChoice === null) break;
  }
  return playerChoice;
}

function playRound(playerChoice, computerChoice){
  if ( whoBeats[playerChoice] === computerChoice) {
    console.log(`You Win! ${playerChoice} beats ${computerChoice}.`)
    score.wins += 1;
  } else if ( whoBeats[computerChoice] === playerChoice) {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}.`)
    score.losses += 1;
  } else {
    console.log(`Draw! Both picked ${playerChoice}`);
    score.draws += 1;
  }
  score.total += 1;
}

function displayScore(prefix = "Score"){
  console.log(
    `${prefix}:
     ${score.wins} wins,
     ${score.draws} ties,
     ${score.losses} losses`)
}


// ----- Code Execution starts here -----
function game(){
  while (true) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    if (playerChoice === null || playerChoice === 'q') break;
    playRound(playerChoice,computerChoice);
    displayScore("Score");
  }
  displayScore("Final Score")
}

game();