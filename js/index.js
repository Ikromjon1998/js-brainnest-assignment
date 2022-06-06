'use strict'
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
        return 'Play again! You are even.'
    }else if(playerSelection =='rock' && computerSelection == 'scissors' || playerSelection =='scissors' && computerSelection == 'paper' || playerSelection =='paper' && computerSelection == 'rock'){
        return `You Won! ${playerSelection[0].toUpperCase() + playerSelection.slice(1, computerSelection.length)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length)}.`
    }
    else if(playerSelection =='paper' && computerSelection == 'scissors' || playerSelection =='scissors' && computerSelection == 'rock' || playerSelection =='rock' && computerSelection == 'paper'){
        return `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1, computerSelection.length)}.`
    }
    else {
        return "Error!";
    }
}
const pSelection = 'scIssors'
const cSelection = computerPlay();
console.log(roundWinLose(pSelection, cSelection));

function game(){
    let playerRec = [];
    let compRec = [];
    let p = 0;
    let c = 0;
    // window.alert('Wow! I am starting!');

    for(let i = 0; i < 5; i++){
        let player = prompt(`What is your choose in the ${i} round?`);
        console.log(player);
        let resultOfRound = roundWinLose(player,computerPlay());
        let arr = resultOfRound.split('!');
        if(arr[0] == 'You Won'){
            playerRec[i] = 1;
            compRec[i] = 0;
            p++;
        } else if(arr[0] == 'You Lose'){
            playerRec [i] = 0;
            compRec[i] = 1;
            c++;
        }
        else if(arr[0] == 'Play again' ){
            playerRec [i] = 0;
            compRec[i] = 0;
        }else {
            console.log('Error!');
        }
        
        
        console.log(`${i+1} round result: ${resultOfRound}`);
    }

    if(p > c){
        // document.getElementById('container').innerHTML = '<h1>Player wone!</h1>';
        console.log('Player Won!');
    }else{
        // document.getElementById('container').innerHTML = '<h1>Player lose!</h1>';
        console.log('Player Lose!');
    }


}
game();
