const choices = ['paper','scissors','rock'];

function getComputerChoice(){
  return choices[Math.floor(Math.random()*3)];
}

function getPlayerChoice(){
  let playerChoice;
  while(true){
    playerChoice = prompt("Enter 'paper', 'scissors' or 'rock'");
    if (playerChoice === 'q') break;
    if (choices.includes(playerChoice)) break;
  }
  return playerChoice;
}

function playRound(playerChoice, computerChoice){
  return;
}



// ----- Code Execution starts here -----
function main(){
  let playingGame = true;
  while (playingGame) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    break;
  }
}

main();


// let obj = {
//     'paper': 0,
//     'scissors': 0,
//     'rock': 0}

// for(let i = 0; i < 10000; i++) {
//     obj[getComputerChoice()] += 1;
// }

// console.log(obj);