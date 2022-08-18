function getComputerChoice() {
    let pick = Math.ceil(Math.random() * 10)



    if (pick <= 3) {
        console.log("rock")
        return "Rock"
    }
    else if (pick <= 6) {
        console.log("Paper")
        return "Paper"
    }
    else {
        console.log("Scissors")
        return "Scissors"
    }

}




let playerSelection = prompt("Rock, paper, Scissors?").toString()






const computerSelection = getComputerChoice()



let re = new RegExp(computerSelection, "gi")


let playwincount = 0
let compwincount = 0
let gamecount = 0

function playRound(playerSelection, getComputerChoice) {

    if ((!!playerSelection.match(re))) {
        console.log(`Draw! ${playerSelection} ties with ${computerSelection}`)
        playwincount = playwincount
        compwincount = compwincount

    }


    else if (!!playerSelection.match(/^rock$/ig) && !!computerSelection.match(/^paper$/ig)) {
        compwincount++
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

    else if (!!playerSelection.match(/^paper$/ig)  && !!computerSelection.match(/^scissors$/ig)) {
        compwincount++
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

else if (!!playerSelection.match(/^scissors$/ig)  && !!computerSelection.match(/^rock$/ig)) {

        compwincount++
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }


    else if (!!computerSelection.match(/^rock$/ig) && !!playerSelection.match(/^paper$/ig)) {
        playwincount++
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        return `You win! ${playerSelection} beats computerSelection`
    }

    else if (!!computerSelection.match(/^paper$/ig)  && !!playerSelection.match(/^scissors$/ig)) {
        playwincount++
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        return `You win! ${playerSelection} beats ${computerSelection}`
    }

else if (!!computerSelection.match(/^scissors$/ig)  && !!playerSelection.match(/^rock$/ig)) {

    playwincount++
    console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    return `You win! ${playerSelection} beats ${computerSelection}`
    }



else {
    console.log(`You lose! ${playerSelection} is not a valid choice`)
    return `You lose! ${playerSelection} is not a valid choice`}

}








function game () {
gamecount = 0
    
    while (gamecount <= 5) {
        playRound(prompt("Rock Paper Scissors"), getComputerChoice())
        console.log(compwincount)
        gamecount++

    }

    console.log(playwincount, compwincount)
console.log(playwincount == compwincount ? "Draw!" : playwincount < compwincount ? "You Lose!" : "You Win!")
    return playwincount == compwincount ? "Draw!" : playwincount < compwincount ? "You Lose!" : "You Win!"

}

//layRound(playerSelection, getComputerChoice)
game()