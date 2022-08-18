function getComputerChoice() {
let pick = Math.ceil(Math.random()*10)



if(pick<=3) {
    console.log("rock")
    return "Rock"}
else if (pick <=6) {
       console.log("Paper")
       return "paper"}
else {
    console.log("Scissors")
    return "scissors"}

}



const playerSelection = "rock";

const computerSelection = getComputerChoice();
console.log()

let re = new RegExp(computerSelection, "gi")
console.log(re)

let playwincount = 0
let compwincount = 0

function playRound(playerSelection, computerSelection) {

if ( (!!playerSelection.match(re))) {
console.log(`Draw! ${playerSelection} ties with ${computerSelection}`)
playwincount = playwincount
compwincount = compwincount

}


else if (!!playerSelection.match(/^rock$/ig) && !!computerSelection.match(/^paper$/ig) ) {
compwincount++
console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
return `You lose! ${computerSelection} beats ${playerSelection}`
}

else if (!!playerSelection.match(/^paper$/ig))  && !!computerSelection.match(/^scissors$/ig) {
    compwincount++
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    return `You lose! ${computerSelection} beats ${playerSelection}`
}

else if (!!playerSelection.match(/^scissors$/ig))  && !!computerSelection.match(/^rock$/ig) {

    compwincount++
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
    return `You lose! ${computerSelection} beats ${playerSelection}`
}



  }
   



  console.log(playRound("rock", computerSelection));