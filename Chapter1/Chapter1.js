console.log("hii");


// variable declaration
let a1 = 60;
console.log(a1);

//Dynamically typed
a1 = "shradha";
console.log(a1);

//case sensitive 
//can have numbers, letters, _ , $
//cannot start with number
let $name = "shradha";
console.log($name);
let ss22 = "shradha";
console.log(ss22);

//CONST || LET || VAR
//let block scope
//var is function scoped
//let and const are block scoped
//block is defined by {}
let x = 6;
{
    let x = 9;
    console.log(x);
}
console.log(x); // 6 and 9

var ss;
let sh;
//const ss; // const must be initialized
const s = 9;


//datatypes - primitive
let a = null;
let b = 90;
let c = "string";
let d = Symbol("shradha aggarwal");
let e = BigInt("555") + 8n;
let f = true;
let g = undefined;
console.log(e);
console.log(typeof e);

///datatypes - non primitive
let object = {
    name: "shradha",
    age: 22,
    enroll: 220467
};
console.log(object);
console.log(typeof object);
console.log(object.name);
console.log(object["name"]);


//PRACTICE SET 1

//
//1. Create a variable of type string and try to add a number to it. Observe the result.
let str = "shradha";
str = str+5;
console.log(str); //shradha5
console.log(typeof str); //string


//2. Create a variable of type number and try to add a string to it. Observe the result.
let num = 6;
num = num + str;
console.log(num);
console.log(typeof num); //string


//3. Create a variable of type string and try to add a boolean to it. Observe the result.
let st = "shradha";
st = st + true;
console.log(st);
console.log(typeof st); //string

//4. Create a variable of type boolean and try to add a number to it. Observe the result.
let bool = false;
bool = bool + 5;
console.log(bool);
console.log(typeof bool); //number

//5. create an object and try to add a number to it. Observe the result.
let obj = {
    name: "shradha",
};
obj = obj + 5;
console.log(obj); //[object Object]5
console.log(typeof obj); //string


//6. create an object and Observe the result.
const objj = {
    name: "shradhha",
    age: 22,
}

objj.name = "aggarwal"; // updating
objj['age'] = 23; // updating
objj['enroll'] = 220467; // addition of new key value pair
console.log(objj);

// objj = 9; // error cannot reassign a const variable


//7. create an array and try to add a number to it. Observe the result.
let arr = [1, 2, 3, 4];
arr = arr + 5;
console.log(arr); //1,2,3,45
console.log(typeof arr); //string

//8. create an array and Observe the result.
const ar = [1, 2, 3, 4];
ar[0] = 0; // updating
ar.push(5); // addition of new element
console.log(ar);
// ar = 9; // error cannot reassign a const variable




const objeccc = {
    banana: "fruit",
    apple: "fruit",
    carrot: "vegetable",
    tomato: "fruit"
}
console.log(objeccc.tomato);
console.log(objeccc['carrot']);
console.log(objeccc.grapes); //undefined
objeccc.grapes = "fruit"; //adding new key value pair
console.log(objeccc);
console.log(objeccc.grapes);
delete objeccc.apple; //deleting key value pair
console.log(objeccc);
console.log(objeccc.apple); //undefined
console.log(typeof objeccc); //object



