// //IIFE - immediately invoked function expressions
// function pro(){
// return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("shradha");
//     }, 2000);
// })}

// (async ()=>{
//     let a  = await pro();
//     console.log(a); 
//     let b = await pro();
//     console.log(b); 
// })()

// //Destructuring 
// let arr = [1,2,3,4,5,6,7];
// let [a,b,c, ...rest] = arr;
// console.log(a,b,c, rest);

// //arr = [1,2]
// //let [a,b,c,c] = arr //NOT ALLOWED DANGER BUT VICE VERSA WORKS

// //no need to do - let a = arr[0]; let b = arr[1];
// let arr1 = [1,2,3,4,5,6,,7,8,9];
// let [x,y, , , ...rest1] = arr;
// console.log(x,y,rest1);

// let obj = {q:1, w:2};
// let {q,w} = obj;
// console.log(q,w);


// //Spread syntax
// let arr2 = [1,2,3,4];
// let obj2 = {...arr2};
// console.log(obj2); //normal implementation

// function sum(v1,v2,v3){
//     return v1+v2+v3;
// }
// console.log(sum(...arr2)); //can be used with funcs

// let objec = {
//     name: "shradha",
//     conpany: "technodune",
//     add: "pune",
// }
// console.log( {...objec, name: "hemant"});

// //SCOPES - local, function, global

// //Hoisting
// //works successfully
// console.log(p);
// greet();
// function greet(){
//     console.log("good morning");
// } //= wale bhi ni chalege kyuki vo function expressions hote hain //CLASS EXP AND FUNC EXP x
// var p = 5; //declaration is hoisted but initialization is not :)
// console.log(p);


// //Closures
// function clo(){
//     let c = "icecream"
//     function clo1(){
//         // c = "chocolate"
//         console.log(c);
//     }
//     c = "toys";
//     return clo1;
// }
// let xx = clo();
// xx()




// //arrow funcitons revisited - revied and a little new
// //one liner

// let emp = {
//     name: "udit",
//     lastname: "Chauhan",
//     role: "js developer",
//     desc: function(){
//         // Console.log(`name is ${this.name} and role is ${this.role}`);
//         setTimeout(()=>{
//             console.log(this);
//             console.log(`name is ${this.name} and role is ${this.role}`);
//         },2000)
//         //arrow function hai isliye chal gya~!!!! kyuki arrow funcs lexical use krta h, apne parent se leta h rather than khud se lene ke [windoow obj nahi leta]
//         let that = this;
//         setTimeout(function(){
//             console.log(this);
//             console.log(that);
//             console.log(`name is ${this.name} and role is ${this.role} with non arrow function`);
//             console.log(`name is ${that.name} and role is ${that.role} with non arrow function`); //works just fine, congrats!
//         })
//     }
// }

// emp.desc();




//Practice set 12

//1. write a js prohgram to print "hello world" after 2 secs of delay

function ps1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(2);
        }, 1000)
    })
}

(async () =>{
    let ps11 = await ps1();
    console.log("hello");
    let ps12 = await ps1();
    console.log("world");
})()

//2. write a function to find avg of two numbers using spread syntax

let arrps2 = [1,2];
let [a,b] = arrps2;

function avg(p,q){
    return (p+q)/2;
}

console.log(avg(...arrps2));

//3. write a program that takes n secs to resolve a promise and a func that takes n as parameter, write iife to resolve at diff values of n;

function ps3(n){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("resolved");
        }, 1000 * n);
    });
}

(async ()=>{
    let n = 3;
    let ps3ps = await ps3(n);
    console.log(ps3ps);
})()

//4. Make an interest calculator using javascript

function icps4(p,r,t){
    return (p*r*t)/100
}
let arrps4 = [1000,2,2];
console.log(icps4(...arrps4));