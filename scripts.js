//gets user input for choice and number of rounds
const playerSelection = prompt("please choose rock,paper or scissors");
const x = prompt("Enter # of rounds", "0");
const num = parseInt(x);
let playerscore = 0;
let compscore = 0;

// random selects rock, paper or scissors
function computerPlay() {
    const results = ["rock", "paper", "scissors"];
    return results[Math.floor(Math.random() * results.length)]
}

// logic to determine if player or computer won the round
function playRound(playerSelection, computerSelection) {
    let p = playerSelection.toLowerCase(), c = computerSelection;
    if (p === "rock" && c === "rock") {
        return "Tie"
    } else if (p === "rock" && c === "paper") {
        compscore += 1;
        return "You Lose! Paper beats Rock"
    } else if (p === "rock" && c === "scissors") {
        playerscore += 1;
        return "You Win! Rock beats Scissors"
    } else if (p === "paper" && c === "rock") {
        playerscore += 1;
        return "You Win! Paper beats Rock"
    } else if (p === "paper" && c === "paper") {
        return "Tie"
    } else if (p === "paper" && c === "scissors") {
        compscore += 1;
        return "You Lose! Scissors beats Paper"
    } else if (p === "scissors" && c === "rock") {
        compscore += 1;
        return "You Lose! Rock beats Scissors"
    } else if (p === "scissors" && c === "paper") {
        playerscore += 1;
        return "You Win! Scissors beats Paper"
    } else if (p === "scissors" && c === "scissors") {
        return "Tie!"
    } else {
        return "Please enter only rock, paper or scissors"
    }
}

// plays the game, (num) is the # of rounds to play
function game(ps, num) {
    for (i = 0; i < num; i++) {
        playRound(ps, computerPlay())
    }
    if (playerscore > compscore) {
        console.log(`You win with a score of ${playerscore} to ${compscore}`)
    } else if (playerscore < compscore) {
        console.log(`You Lose with a score of ${playerscore} to ${compscore}`)
    } else {
        console.log(`Tie game with a your score ${playerscore} and computer's score ${compscore}`)
    }
}
game(playerSelection,num);
