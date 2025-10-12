//sync and async  (setTimeOut)

//callback funcs - passed as an argument to another func

let cbf = (vid, callback) =>{
    console.log(vid);
    setTimeout(callback, 5000);
}

function func(){
    console.log("running");
    //alert("im passed!");
}

cbf('googlegoogle', func);
//onload, onerror
//script.onerror=()=>{
//  callback(new Error("error"));
// }

//callback hell, pyramid of doom
//solution - PROMISES
//has state and result (3 states - pending(undefined) , fulfilled(result) , rejected(error obj))

let p = new Promise((resolve, reject)=>{
    console.log("im a promise");
    setTimeout(()=>{
        console.log("im fulfilled");
        resolve(true);
    },3000)
})

let p1 = new Promise((resolve, reject)=>{
    console.log("im promise 2");
    setTimeout(()=>{
        console.log("im rejected");
        reject(new Error("im an error"))
    },3000)
})

p.then((value)=>{
    console.log("im done");
})

p1.catch((error)=>{
    console.log("im caught");
})
//OR
p1.then((value)=>{
    console.log(value);
}, (error)=>{
    console.log("error");
})

//Promise chaining

let pro1 = new Promise((resolve, reject) =>{
    console.log("weve started");
    setTimeout(()=>{
        console.log("promise 1");
        resolve(1);
    }, 3000);
}).then((value)=>{
    console.log(value);
    return new Promise((resolve, reject) =>{
        console.log("weve started 2");
        setTimeout(()=>{
            console.log("promise 2");
            resolve(2)
        }, 3000);
    })
}).then((value)=>{
    console.log(value);
    console.log("DONE!");
})

//multiple handlers
//p1.then()
//p1.then()...etc

//promise API

// let pall = Promise.all([p, p1, pro1]);
let pall = Promise.allSettled([p, p1, pro1]);
// let pall = Promise.race([p, p1, pro1]);
// let pall = Promise.any([p, p1, pro1]);
//promise.resolve and promise.reject

pall.then((value)=>{
    console.log("resolved" + value);
})

