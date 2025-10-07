console.log("Shradha Aggarwal");

console.log(console); //listing all the methods and properties of console object 

//ERROR 
console.error("This is an error message");

//WARN
console.warn("This is a warning message");

//INFO
console.info("This is some information");

//ASSERT
console.assert(4===5, "4 is not equal to 5");

//CLEAR
//console.clear(); //clears the console

//TABLE
let object = {name: "shradha", age:22 , enroll: 220467};
console.table(object);

//TIME AND TIMEEND
console.time("forloop");
for(let i=0; i<5; i++){
    console.log("loop");
}
console.timeEnd("forloop");

console.time("whileloop");
let j=0;
while(j<5){
    console.log("loop");
    j++;
}
console.timeEnd("whileloop");

//ALERT
//alert("This is an alert message");

//PROMPT
//let age = prompt("Enter your age: "); CAN HAVE A DEFAULT VALUE - (e.g. prompt("Enter your age: ", 18) )
//console.log(age);

//CONFIRM
//let confirmAge = confirm("Are you sure you want to proceed? ");
//console.log(confirmAge);

//disadvantages of alert, prompt and confirm
//1. They are synchronous and block the execution of code until the user interacts with them.
//2. They can be disruptive to the user experience, especially if overused.
//3. They have a default browser style that cannot be customized, which may not fit with the design of your website.
//4. They can be ignored or blocked by users, especially if they are used for advertising or other unwanted purposes.
//5. They do not provide a way to validate user input, which can lead to errors or security issues.
//6. They can be annoying to users if they are used too frequently or for trivial purposes.
//7. They can be difficult to test and debug, especially if they are used in complex applications.
//8. They can be a security risk if they are used to collect sensitive information from users.






//DOM - Document Object Model
//BOM - Browser Object Model
//window object - global object

//console.log(window); //window object OR window.console.log(window); //window.alert() //document object
console.log(document); //document object 
console.log(document.body); //body of the document
//console.log(document.body.style.background = "yellow"); //changing background color of body 

//DOM methods
console.log(document.getElementById("heading")); //getting element by id
console.log(document.getElementsByClassName("para")); //getting elements by class name
//etc

//BOM methods
//alert, prompt, confirm - these are part of window object
//location.href, history, navigator - these are also part of window object

//PRACTICE SET 6

//1. Write a program using prompt to take input for age from the user and alert if he can drive.

// let age = Number.parseInt(prompt("enter your age: "));
// if(age>=18){
//     alert("can drive");
// }else{
//     alert("cannot drive");
// }

//===============!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!==============

//2. In question 1 , use confirm to ask the user if he wants to see the prompt again.

// let confirmage = confirm("do you want to see the prompt again? ");
// if(confirmage){
//     driving();
// }else{
//     alert("ok");
// }



// let confirmation = true;

// while(confirmation){
//     let ageof = Number.parseInt(prompt("enter your age: "));
//     if(ageof>=18){
//         alert("can drive");
// } else{
//         alert("cannot drive");
// }
// confirmation = confirm("do you want to see the prompt again? ");
// }

//===============!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!==============
//3. in prev, generate error message if age is negative

// const driving = (age) =>{
//     if(age<0){
//         console.error("age cannot be negative");
//         return;
//     }
//     return age>=18 ? alert("can drive") : alert("cannot drive");
// }
// let confirmation = true;

// while(confirmation){
//     let ageof = Number.parseInt(prompt("enter your age: "));
//     driving(ageof);
//     confirmation = confirm("do you want to see the prompt again? ");
// }

//===============!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!==============
//4. Write a program to redirect the user to google.com if the number entered is greater than 4

// let num = Number.parseInt(prompt("enter a number: "));
// if(num>4){
//     location.href = "https://www.google.com";
// }

//===============!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!==============
//5. Write a program to change the background color of the page to yellow, blue, or pink based on user input using prompt

// let color = prompt("enter a color (yellow, blue, pink): ");

// if(color==="yellow" || color==="blue" || color==="pink"){
//     document.body.style.background = color;
// }
