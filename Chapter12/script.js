//IIFE - immediately invoked function expressions
function pro(){
return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("shradha");
    }, 2000);
})}

(async ()=>{
    let a  = await pro();
    console.log(a); 
    let b = await pro();
    console.log(b); 
})()

//Destructuring 
let arr = [1,2,3,4,5,6,7];
let [a,b,c, ...rest] = arr;
console.log(a,b,c, rest);

//arr = [1,2]
//let [a,b,c,c] = arr //NOT ALLOWED DANGER BUT VICE VERSA WORKS

//no need to do - let a = arr[0]; let b = arr[1];
let arr1 = [1,2,3,4,5,6,,7,8,9];
let [x,y, , , ...rest1] = arr;
console.log(x,y,rest1);

let obj = {q:1, w:2};
let {q,w} = obj;
console.log(q,w);


//Spread syntax
let arr2 = [1,2,3,4];
let obj2 = {...arr2};
console.log(obj2); //normal implementation

function sum(v1,v2,v3){
    return v1+v2+v3;
}
console.log(sum(...arr2)); //can be used with funcs

let objec = {
    name: "shradha",
    conpany: "technodune",
    add: "pune",
}
console.log( {...objec, name: "hemant"});

//SCOPES - local, function, global

//Hoisting
//works successfully
console.log(p);
greet();
function greet(){
    console.log("good morning");
} //= wale bhi ni chalege kyuki vo function expressions hote hain //CLASS EXP AND FUNC EXP x
var p = 5; //declaration is hoisted but initialization is not :)
console.log(p);


//Closures

//arrow funcitons revisited - revied and a little new

//Practice set 12