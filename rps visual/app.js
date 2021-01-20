const game = () => {
    let playerScore = 0;
    let compScore = 0;
    const updateScore = () => {
        const pScore = document.querySelector(".player-score p");
        const cScore = document.querySelector(".computer-score p");
        pScore.textContent = playerScore;
        cScore.textContent = compScore;
    }
    function playRound (playerSelection, computerSelection){
        const winner = document.querySelector(".winner");
        if (playerSelection === computerSelection) {
            winner.textContent = "It's a tie!"
            return;
        }
        if (playerSelection === "rock"){
            if (computerSelection === "paper"){    
                compScore++; 
                updateScore();
                winner.textContent = "Computer Wins";
                return;
            }else if (computerSelection === "scissors"){
                playerScore++;
                updateScore();
                winner.textContent = "Player Wins";
                return;
            }
        }
        if(playerSelection === "paper"){
            if (computerSelection === "scissors"){
                compScore++;                
                updateScore();
                winner.textContent = "Computer Wins";
                return;
            }else if (computerSelection === "rock"){
                playerScore++;  
                updateScore();
                winner.textContent = "Player Wins";
                return;
            }
        }
        if(playerSelection === "scissors"){
            if (computerSelection === "rock"){
                compScore++; 
                updateScore();
                winner.textContent = "Computer Wins";
                return;            
            } else if (computerSelection === "paper")
            {
                playerScore++;
                updateScore();
                winner.textContent = "Player Wins";
                return;
            }
        }
    }
    const playMatch = () => {
        const options = document.querySelectorAll(".choices button");
        const playerHand = document.querySelector('.playerhand');
        const computerHand = document.querySelector('.computerhand');
        const hands = document.querySelectorAll('hands img');
        
        const compArray = ["rock", "paper", "scissors"];
        options.forEach(option => {
            option.addEventListener("click", function (){
                let randomNumber = Math.floor(Math.random()*3);
                let compChoice = compArray[randomNumber];
                playRound(this.textContent, compChoice);
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${compChoice}.png`;
            } )
        })
    }

    playRound();
    playMatch();
    }
    game();

    /*function game(){
    var i;
    for(i = 0; i < 5; i++){
        const computerSelection = computerPlay();
        const playerSelection = humanPlay();
        const results = playRound(playerSelection, computerSelection);
        switch(results){
            case "win":
             winner.textContent = "Player Wins";
             playerScore++;
             updateScore();
             break;
            case "lose":
             winner.textContent = "Computer Wins";
             compScore++;
             updateScore();
             break;
            default:
             winner.textContent = "It's a Tie";
        }
    }
    if (playerScore > compScore){
        alert("Player: " + playerScore +"\nComputer: " + compScore +"\nI win!")}
        else if (playerScore === compScore){
            alert("Player: " + playerScore +"\nComputer: " + compScore +"\nTie!")}
        else if (compScore > playerScore) {alert("Player: " + playerScore +"\nComputer: " + compScore +"\nI lose!")
        }
    }
}
*/