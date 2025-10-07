//operators
let a = 8;
let b = 2;

//arethemactic operators
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);
console.log("a * b = ", a*b);
console.log("a ** b = ", a**b);

console.log("++a = ", ++a);
console.log("a++ = ", a++);
console.log("--a = ", --a);
console.log("a-- = ", a--);
console.log("a = ", a);

//assignment operators
//=, +=, -=, *=, /=, %=, **=

//cpmparison operators
// ==, ===, !=, !==, >, <, >=, <=

//logical operators
// &&, ||, !

//conditional (ternary) operator
// condition ? expr1 : expr2

//Conditional expressions
//if, if...else, if...else if...else, switch


/*
let statement = prompt("Enter a number: ");
statement = Number.parseInt(statement); //convert string to number
alert(`You have entered ${statement}`);
*/


//PRACTICE SET 2

//1.use logical operator to find whether the number lies between 10 and 20

let num = 15;
if(num>=10 && num<=20){
    console.log("yes");
}else{
    console.log("no");
}

//2. demonstarate the use of switch case statements

let age = 21;
switch(age){
    case 21: 
        console.log("shradha");
        break;
    case 20: 
        console.log("sapna");
        break;
    case 24:
        console.log("hemant");
        break;
    default:
        console.log("no one");
}

//3. write a program to find whether a number is divisible by 2 and 3

let number = 18;
if(number%2==0 && number%3==0){
    console.log("yes");
}else{
    console.log("no");
}

//4. write a program to find whether a number is divisible by 2 or 3

let number1 = 16;
if(number1%2==0 || number1%3==0){
    console.log("yes");
}
else{
    console.log("no");
}

//5. write a program to find whether age is greater than 18 or not using ternary operator
let agee = 22;
agee>18? console.log("yes"):console.log("no");