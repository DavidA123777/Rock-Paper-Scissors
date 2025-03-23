function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)
  return choice;
}

// 0 = rock
// 1 = paper
// 2 = scissors


let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
  let val;
  let isTrue = true;
  while(isTrue){
     val = prompt("Please enter rock, paper, or scissors: ");
     val = val.toLowerCase();
     if (val == "rock" || val == "paper" || val == "scissors"){
      isTrue = false;
     }
  }
  if (val === 'rock'){
    return 0;
  }
  else if (val === 'paper'){
    return 1;
  }
  else{
    return 2;
  }
}

// rock
// paper
// scissors





function playRound(human,computer){
if (human === 0 && computer === 2){
  console.log("You win, rock beats scissors");
  humanScore++;
  
}
else if (human === 0 && computer === 1){
  console.log("You lose, paper beats rock");
  computerScore++;
}
else if (human === 1 && computer === 0){
  console.log("You win, paper beats rock");
  humanScore++;
}
else if (human === 1 && computer === 2){
  console.log("You lose, scissors beats paper");
  computerScore++;
}
else if (human === 2 && computer === 0){
  console.log("You lose, rock beats scissors");
  computerScore++;
}
else if (human === 2 && computer === 1){
  console.log("You win, scissors beats paper");
  humanScore++;
}
else{
  console.log("It's a tie");
}
console.log(`Your score is ${humanScore} and the computer's score is ${computerScore}`)

}


while(humanScore < 2 && computerScore < 2){

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}

if (humanScore === 2){
  console.log(`You win, Your final score is ${humanScore} and the computer's final score is ${computerScore}`);

}
else{
  console.log(`You lose, Your final score is ${humanScore} and the computer's final score is ${computerScore}`);
}
