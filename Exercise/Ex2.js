// Snake water gun game
//QUESTION 
// Write a program for a snake, water and gun game. The rules of the game are as follows:
// Snake vs Water: Snake drinks the water hence snake wins
// Water vs Gun: Gun will drown in water hence water wins
// Gun vs Snake: Gun will kill the snake hence gun wins

function randomchoice(){
    let choices = ['s', 'w', 'g'];
    let random = Math.floor(Math.random()*3);
    return choices[random];
}

let again = true;

while(again){
let userc = prompt("enter your choice - \'s', \'w\', \'g\' ");
let compc = randomchoice();
console.log(`user choice is ${userc}`);
console.log(`computer choice is ${compc}`);

if(userc == compc){
    alert(`u:${userc} vs c: ${compc} = match tied`);
} else if((userc == 'g' && compc == 's') || (userc == 'g' && compc == 'w') || (userc == 's' && compc == 'w')){
    alert(`u:${userc} vs c: ${compc} = user wins`);
} else if((compc == 'g' && userc == 's') || (compc == 'g' && userc == 'w') || (compc == 's' && userc == 'w')){
    alert(`u:${userc} vs c: ${compc} = computer wins `);
} else{
    alert("invalid input");
}
again = confirm("do you want to play the game? ");
}
