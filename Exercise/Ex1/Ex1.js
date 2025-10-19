//QUESTION 

// Write a program to generate a random number between 1 and 100. The user has to guess the number.
// If the user guesses the number, he/she wins. If the user does not guess the number,
// he/she is prompted to try again. Also, keep track of the number of tries the user has taken to guess the number.
// At the end of the game, print the score as well (100 - number of tries). 



function randomgen(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}

let original = randomgen(1,100);
let chances = 0;

do{
    let guess = parseInt(prompt("Guess a number between 1 and 100: "));
    chances++;
    if(guess === original){
        alert(`guessed ${original} in ${chances} chances`);
        alert("score = " + (100-chances));
        break;
    } else if(guess < original){
        console.log("too low");
    } else{
        console.log("too high");
    }
} while(true);