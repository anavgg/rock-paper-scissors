let userScore= 0;
let computerScore= 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div  = document.getElementById("r");
const paper_div  = document.getElementById("p");
const scissors_div  = document.getElementById("s");

function getComputerChoice(){
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
}

function win (userChoice, computerChoice){
   userScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";
}

function lose (userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " loses to " + convertToWord(computerChoice) + ". You lost...";
 }

 function draw (userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice) + " equals " + convertToWord(computerChoice) + ". It's a draw";
 }

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp": 
        win(userChoice, computerChoice);
        break;
        case "pr":
        case "ps":
        case "sr":
        lose(userChoice, computerChoice);
        break;
        case "pp":
        case "ss":
        case "rr":
        draw(userChoice, computerChoice);
        break;
    }
}

rock_div.addEventListener('click', function() {
        game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
})