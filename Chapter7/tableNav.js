// let t = document.body.firstElementChild.firstElementChild;
let t = document.body.firstElementChild.firstElementChild;
console.log(t);

console.log(t.rows);
console.log(t.caption); 
console.log(t.tHead);
console.log(t.tFoot);
console.log(t.tBodies);
console.log(t.rows[1].cells);
console.log(t.rows[1].cells[0].innerText);

//get Element by class name
let Classcolorchange = document.getElementsByClassName('data')[4];
console.log(Classcolorchange);
Classcolorchange.style.color = 'red';

//get element by id
let idcolorchange = document.getElementById('last');
idcolorchange.style.color = 'blue';

//query selector all and query selector
// document.body.querySelector()
let qselector = document.body.querySelectorAll(".data");
qselector[6].style.color = 'yellow';
qselector[7].style.color = 'pink';

//get element by tag name
console.log(document.getElementsByTagName("div"));
console.log(document.querySelector(".data").getElementsByTagName("div"));

//get element by name
// document.getElementsByName("");

//Matches
let id1 = document.getElementById('last');
console.log(id1);
console.log(id1.matches(".data"));

//closest
// console.log(id1.closest(".data"));
//goes to parent and parent and matches

//Contains
let hi = document.getElementById('hi');
console.log(id1.contains(hi));



//PRACTICE SET 7

//1. change the color of first element to red of a nav bar
let h = document.getElementById('home');
h.style.color = 'red';

//2. Create three children and change the color of first and last child to green
let pc = document.getElementsByClassName("navbar")[0];
console.log(pc);
let ch = pc.firstElementChild;
ch.style.color = 'green';

let ch1  =pc.lastElementChild;
ch1.style.color = 'pink';


//3. write js code to turn the bg of all li tags to be cyan
let ques = document.querySelectorAll('li');
ques.forEach((element) => {
    element.style.backgroundColor = 'cyan';
});

OR 
let ques1 = document.getElementsByTagName('li');
Array.from(ques1).forEach((ele) =>{
    //whatever
})

//queary selector ke paas foreach hota h but tag name ke paas nahi kyuki vo html collection dete h aur queryselector nodelist


//4.which is used to access the farthest ancestor that matches a given css selector
//matches, closest, contains, none