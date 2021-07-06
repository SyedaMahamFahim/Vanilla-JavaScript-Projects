


function getUserChoose(userChoice) {
    let userScore = document.getElementById('user-win')
    let computerScore = document.getElementById('computer-win')
    let userPoints = 0;
    let computerPoints = 0;
    var choice = ["rock", "paper", "scissors"];
    var winnerDesc = document.getElementById('winner-desc')
    var computerChoice = choice[Math.floor(Math.random() * choice.length)];


    if (userChoice == "rock") {
        if (computerChoice == "Rock") {
            winnerDesc.innerHTML = "It's a tie !"
        }
        else if(computerChoice == "Scissors"){
            winnerDesc.innerHTML = "You Won!Rock smashes scissors"
            getUserWins++;
        }
        else{
            winnerDesc.innerHTML = "Computer Won!Paper covers rock"
            getcomputerWins++

        }
    }
    else if (userChoice == "paper") {
        if (computerChoice == "Paper") {
            winnerDesc.innerHTML = "It's a tie !"
        }
        else if(computerChoice == "Scissors"){
            winnerDesc.innerHTML = "Computer Won!Scissors cut paper"
            getcomputerWins++
            //computerWins.innerHTML=getcomputerWins;
        }
        else{
            winnerDesc.innerHTML = "You Won !Paper covers rock"
            getUserWins++;
            // userWins.innerHTML=getUserWins;
        }
    }
    else {
        if (computerChoice == "Scissors") {
            winnerDesc.innerHTML = "It's a tie !"
        }
        else if(computerChoice == "Rock"){
            winnerDesc.innerHTML = "Computer Won!Rock smashes scissors"
            getcomputerWins++
            //computerWins.innerHTML=getcomputerWins;
        }
        else{
            winnerDesc.innerHTML = "You Won !Paper covers rock"
            getUserWins++;
            //userWins.innerHTML=getUserWins;
        }
    }
    userWins.innerHTML=getUserWins; 
    computerWins.innerHTML=getcomputerWins;
}





    // if 
    // (
    //     userChoice == "rock" && computerChoice == "scissors" ||
    //     userChoice == "paper" && computerChoice == "rock" ||
    //     userChoice == "scissors" && computerChoice == "paper"
    // ) {
    //     winnerDesc.innerHTML = "It's a tie !"
    //     userPoints += 1;
    //     userScore.innerHTML = userPoints;
    // } 
    // else if 
    // (
    //     userChoice == "rock" && computerChoice == "paper" ||
    //     userChoice == "paper" && computerChoice == "scissors" ||
    //     userChoice == "scissors" && computerChoice == "rock"
    // ) {
    //     winnerDesc.innerHTML = "You Loos !"
    //     computerPoints += 1;
    //     computerScore.innerHTML = computerPoints;
    // }
    // else
    // {
    //     winnerDesc.innerHTML = "It's a tie !"
    // }