let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById("s");

function getcomputerChoice()
{
	const choices = ["r", "p", "s"];
	const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function lettertoWords(letter)
{
if(letter == "r") return "Rock";

if(letter == "p") return "Paper";

return "Scissor";
}

function win(userchoice,computerchoice)
{
const userchoice_div = document.getElementById(userchoice);
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = lettertoWords(userchoice) +"(user) beats "+ lettertoWords(computerchoice) + "(comp). You win"; 
userchoice_div.classList.add('greenglow');
setTimeout(function() { userchoice_div.classList.remove('greenglow')}, 500);
}

function loss(userchoice,computerchoice)
{
const userchoice_div = document.getElementById(userchoice);
computerScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = lettertoWords(userchoice) +"(user) lose to "+ lettertoWords(computerchoice) + "(comp). You lost"; 
userchoice_div.classList.add('redglow');
setTimeout(function() { userchoice_div.classList.remove('redglow')}, 500);
}

function draw(userchoice,computerchoice)
{
const userchoice_div = document.getElementById(userchoice);
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = lettertoWords(userchoice) +"(user) equals to "+ lettertoWords(computerchoice) + "(comp). Its a draw"; 
userchoice_div.classList.add('grayglow');
setTimeout(function() { userchoice_div.classList.remove('grayglow')}, 500);
}

function game(userchoice)
{
	const computerchoice = getcomputerChoice();
switch(userchoice+computerchoice)
{
case"rs":
case"sp":
case"pr":
win(userchoice,computerchoice);
break;

case"sr":
case"ps":
case"rp":
loss(userchoice,computerchoice);
break;

case"rr":
case"ss":
case"pp":
draw(userchoice,computerchoice);
break;
}
}

function main()
{
rock_div.addEventListener('click', function()
{
	game("r");
})

paper_div.addEventListener('click', function()
{
	game("p");
})

scissor_div.addEventListener('click', function()
{
	game("s");
})
}

main();