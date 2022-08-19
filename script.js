

function getComputerChoice() {
    let pick = Math.ceil(Math.random() * 10)



    if (pick <= 3) {
        console.log("Rock")
        return "Rock"
    }
    else if (pick <= 6) {
        console.log("Paper")
        return "Paper"
    }
    else {
        console.log("Scissors")
        return "scissors"
    }

}




//let playerSelection = prompt("Rock, paper, Scissors?").toString()





let computerSelection = getComputerChoice()
//let playerSelection = prompt("Rock, Paper, Scissors")
let playerSelection = ""

let re = new RegExp(computerSelection, "gi")


let playwincount = 0
let compwincount = 0
let gamecount = 0

function playRound(playerSelection, computerSelection) {

    if ((playerSelection.toLowerCase() == computerSelection.toLowerCase())) {
        console.log(`Draw! ${playerSelection} ties with ${computerSelection}`)
        playwincount = playwincount
        compwincount = compwincount

    }


    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper") {
        compwincount++
        compscore.innerText = `The computers score is ${compwincount}`
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {
        compwincount++
        compscore.innerText = `The computers score is ${compwincount}`
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock") {

        compwincount++
        compscore.innerText = `The computers score is ${compwincount}`
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }

    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors") {

        compwincount++
        compscore.innerText = `The computers score is ${compwincount}`
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }



    else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        playwincount++
        playerscore.innerText = `The players score is ${playwincount}`
        console.log(`You win! ${playerSelection.trim()} beats ${computerSelection}`)
        return `You win! ${playerSelection.trim()} beats computerSelection`
    }

    else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        playwincount++
        playerscore.innerText = `The players score is ${playwincount}`
        console.log(`You win! ${playerSelection.trim()} beats ${computerSelection}`)
        return `You win! ${playerSelection} beats ${computerSelection}`
    }

else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {

    playwincount++
    playerscore.innerText = `The players score is ${playwincount}`
    console.log(`You win! ${playerSelection} beats ${computerSelection}`)
    return `You win! ${playerSelection.trim()} beats ${computerSelection}`
    }



else {
    console.log(`You lose! ${playerSelection} is not a valid choice`)
    return `You lose! ${playerSelection} is not a valid choice`}
    compwincount++
    compscore.innerText = `The computers score is ${compwincount}`
}








/*function game () {
gamecount = 0

    
    while (gamecount <= 5) {
        playerSelection = prompt("Rock Paper Scissors")
        computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
       
        gamecount++
        console.log(gamecount)
    }

    console.log(playwincount, compwincount)
console.log(playwincount == compwincount ? "Draw!" : playwincount < compwincount ? "You Lose out of 5!" : "You Win out of 5!")
    return playwincount == compwincount ? "Draw!" : playwincount < compwincount ? "You Lose out of 5!" : "You Win out of 5!"

}
*/

//playRound(playerSelection, computerSelection)


const buttons =  document.querySelectorAll("button") 

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        computerSelection = getComputerChoice()
            playRound(e.target.textContent, computerSelection)
            gamecount++
            gamescore.innerText = `The game number is ${gamecount}`
          
        
       
        console.log("playwin", playwincount)
        if (gamecount == 5) {
            
             playwincount == compwincount ? winner.innerText ="Draw!" : playwincount < compwincount ? winner.innerText = "You Lose out of 5!" : winner.innerText = "You Win out of 5!"
            score.appendChild(winner)
            console.clear()
            buttons.forEach(e => e.style.display = "none")
            score.appendChild(restart)
            restart.innerHTML = "NEW GAME!"
            restart.setAttribute("onClick", "window.location.reload()")
        }

 
    } )
})




let score = document.querySelector(".score") 
score.style.border= "2px solid red"

let playerscore = document.createElement("p")
playerscore.innerText = `The players score is ${playwincount}`

let compscore = document.createElement("p")
compscore.innerText = `The computers score is ${compwincount}`

score.appendChild(playerscore)
score.appendChild(compscore)

let gamescore = document.createElement("p")
gamescore.innerText = `The game number is 0`

score.appendChild(gamescore)

let winner =  document.createElement("p")

let restart = document.createElement("button")
