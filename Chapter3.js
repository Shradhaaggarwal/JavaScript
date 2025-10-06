//loops

//1. for
for(let i=0; i<5; i++){
    console.log("hii" + " " + i);
}

//2. for in
let obj = {
    name: "shradha",
    age: 22,
    enroll: 220467
};
for(let a in obj){
    console.log(`the ${a} of ${obj.name} is ${obj[a]}`)
}

//3. for of
let arr = [1,2,3,4,5];
for(let b of arr){
    console.log(b);
};

let str = "shradha";
for(let a of str){
    console.log(a);
}

//4. while 
let j=0;
while(j<5){
    console.log(j);
    j++;
}

//5. do while
let k = 0;
do{
    console.log(k + "default");
    k++;
}while(k<0);


//functions


//1. function declaration
function add(x,y){
    return x+y;
}
console.log(add(2,3));


//2. function expression
let sub = function(x,y){
    return x-y;
}
console.log(sub(5,3));

//3. arrow function
let mul = (x,y) => {
    return x*y;
}
console.log(mul(2,3));

//4. default parameter
function div(x=1,y=1){
    return x/y;
}
console.log(div(6,3));
console.log(div(5));
console.log(div());

//5. callback function
function calculator(num1,num2,operator){
    return operator(num1,num2);
}
function add1(x,y){
    return x+y;
}
function sub1(x,y){
    return x-y;
}
console.log(calculator(2,3,add1));
console.log(calculator(5,3,sub1));

//6. nested function
function outer(){
    console.log("outer function");
    function inner(){
        console.log("inner function");
    }
    inner();
}
outer();


//7. IIFE (Immediately Invoked Function Expression)
(function(){
    console.log("IIFE function");
})();


//PRACTICE SET 3

//1. write a program to print marks of a student in an object using for loop

let student = {
    shradha : 90,
    hemant: 99,
    udit : 95,
};
console.log("-----using for loop-----");
for(let i=0; i<Object.keys(student).length; i++){
    console.log(`marks of ${Object.keys(student)[i]} is ${student[Object.keys(student)[i]]}`);
}
console.log("-----using for in loop-----");
for(let key in student){
    console.log(`marks of ${key} is ${student[key]}`);
}

//2. write a program to print try again until the user enters the correct number

let cnum = 7;
let unum=7;
do{
    //unum = parseInt(prompt("enter a number: "));
    if(unum!=cnum){
        console.log("try again");
    } else{
        console.log("you entered the correct number");
    }
} while(unum!=cnum);

//3. write a func to print the mean of 5 nums

let mean = (a,b,c,d,e) =>{
    return (a+b+c+d+e)/5;
}
let ans = mean(1,2,3,4,5);
console.log(ans);
console.log(typeof(ans));