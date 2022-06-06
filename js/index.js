
function computerPlay(){
    let arr = ['Rock', 'Paper', 'Scissors'];
    let res = arr[Math.floor(Math.random() * 3)]; 
    console.log(res);
    return res;
}

function roundWinLose(playerSelection1, computerSelection1){
    let playerSelection = playerSelection1.toLowerCase();
    let computerSelection = computerSelection1.toLowerCase();
    if(playerSelection == 'rock' && computerSelection == 'rock' || playerSelection == 'paper' && computerSelection == 'paper' || playerSelection == 'scissors' && computerSelection == 'scissors'){
        return 'Play again! You are even!'
    }else if(playerSelection =='rock' && computerSelection == 'scissors' || playerSelection =='scissors' && computerSelection == 'paper' || playerSelection =='paper' && computerSelection == 'rock'){
        return `You Won! ${playerSelection[0].toUpperCase() + playerSelection.slice(1, computerSelection.length)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length)}!`
    }
    else if(playerSelection =='paper' && computerSelection == 'scissors' || playerSelection =='scissors' && computerSelection == 'rock' || playerSelection =='rock' && computerSelection == 'paper'){
        return `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1, computerSelection.length)}!`
    }
    else {
        return "Error!";
    }
}
const pSelection = 'scIssors'
const cSelection = computerPlay();
console.log(roundWinLose(pSelection, cSelection));
