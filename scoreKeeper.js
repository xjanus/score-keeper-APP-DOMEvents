var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){

    if(p1Score < winningScore && !gameOver){
        p1Score++;
        p1Display.textContent = p1Score;
    }

    if (p1Score === winningScore){
        p1Display.classList.add("winner");
        gameOver = true;
    }
});

p2Button.addEventListener("click", function(){

    if(p2Score < winningScore && !gameOver){
        p2Score++;
        p2Display.textContent = p2Score;
    }

    if (p2Score === winningScore){
        p2Display.classList.add("winner");
        gameOver = true;
    }
});

resetButton.addEventListener("click",function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false;
};

// change event will run anytime the value changes. In contrast to click, 
// it will run when the value changes, irrespective of whether the value was 
// changed through click, delete, numbers, tab, etc.
numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value; //provides changed value as a string - "7",etc.
    winningScore = Number(this.value); //Number object changes the string to integer
    reset();
});