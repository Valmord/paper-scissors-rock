const choices = ['paper','scissors','rock'];
const whoBeats = {
  'paper': 'rock',
  'rock': 'scissors',
  'scissors': 'paper'
}

let score = {
  round: 0,
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
    score.round += 1;
  } else if ( whoBeats[computerChoice] === playerChoice) {
    console.log(`You lose! ${computerChoice} beats ${playerChoice}.`)
    score.losses += 1;
    score.round += 1;
  } else {
    console.log(`Draw! Both picked ${playerChoice}`);
    score.draws += 1;
  }
}


const btnContainer = document.querySelector('.container')
btnContainer.addEventListener('click', e => {
  const playerChoice = e.target.innerText.toLowerCase();
  playGame(playerChoice);
  e.stopPropagation();
})

function playGame(playerChoice){
  let computerChoice = getComputerChoice();
  playRound(playerChoice,computerChoice);
  displayScore();
  if (score.round == 5) playAgain();
}

function displayScore(){
  const results = document.querySelector('.results');
  if (score.round === 5) {
    const winner = determineWinner();
    results.innerText = `${winner}\nFinal Score: ${score.wins} wins, ${score.draws} ties, ${score.losses} losses`;
  } else {
    results.innerText = `Score: ${score.wins} wins, ${score.draws} ties, ${score.losses} losses`;
  }
}

function determineWinner(){
  if (score.wins > score.losses) {
    return 'You Win!'
  } else {
    return 'AI Wins...'
  }
}

function playAgain(){
  btnContainer.childNodes.forEach(node => node.disabled = true)

  const playAgainBtn = document.createElement('button');
  playAgainBtn.innerText = "Play Again?";
  document.querySelector('.play-again').appendChild(playAgainBtn);

  playAgainBtn.addEventListener('click', () => {
    btnContainer.childNodes.forEach(node => node.disabled = false);
    [score.draws, score.losses, score.round, score.wins] = [0,0,0,0];
    document.querySelector('.results').innerText = "";
    playAgainBtn.remove();
  }, {once: true})

}