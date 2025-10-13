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


//Async and await
//async makes a func return a promise and await makes a func wait for a promise

async function wreport(){
    let prom = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("learning async and await")
            resolve("resolved")
        }, 11000);
    })

    let prom2 = new Promise((resolve, error)=>{
        setTimeout(()=>{
            console.log("learning asyncs and await 2")
            resolve("resolved2")
        }, 10000)
    })
    // let a = await prom;
    // let b = await prom2;
    let a = Promise.all([prom, prom2])
    // console.log(a + b);
    return a;
}

let report = wreport();
console.log(report);

wreport().then((value)=>{
    console.log("returned:" + value);
})


//ERROR handleing , try catch 
try{
    console.log(shradha);
}
catch{
    console.log("its okay, it happens");
} //works synchronously and doesnt work for scheduled code



//Error object and custom error
try{
    // console.log(shradha);
    // throw new Error('invalid');
    throw new SyntaxError('sorry');
} catch(error){
    console.log("its okay happens");
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

//Finally clause - runs in any case
try{
    console.log(p);
} catch(err){
    console.log("its okay");
    console.log(x);
}finally{
    console.log("BHAI MAI TOH CHALUNGA HE CHALUNGA");
}



//PRACTICE SET 9
//1. write a program in js to load a file in a browser using promises and send an alert when loaded

const loadS = async (src)=>{
    let psp =  new Promise((resolve, reject)=>{
        let sc = document.createElement("script");
        sc.src = src;
        sc.onload = () => resolve(src);
        sc.onerror = () => reject( new Error (`Failed to load: ${src}`));
        document.head.append(sc);
        // console.log(sc);
    })
    return psp.then(()=>{
        console.log("hurray");
    }, (Error)=>{
        console.log("shit");
    })   
}


const main2 = async () => {
    let a = await loadS("script1.js");
    console.log(a);
}
main2();

//2. with async await
//in first only both .then and 2.

//3. create a promise which rejects after 3 secs, use async and await to get a value and use try catch to handle a value.

const qs3 = async () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            reject(new Error("sorryyyyy!!!"))
        }, 3000)
    })
}


try{
    let qs3aw = await qs3();
    console.log(qs3aw);
} catch(err){
    console.log("sorry theres an error");
}

//4. write a func async await with promise.all inside to await three promises AND compare the result when we wait for each promise one by one

let qs4 = async () =>{
    let qp1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log("qps1");
            resolve("qps1");
        },3000)
    })

    let qp2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log("qps2");
            resolve("qps2");
        },4000)
    })

    let qp3 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log("qps3");
            resolve("qps3");
        },5000)
    })

    let proall = await Promise.all([qp1, qp2, qp3]);
    console.log(proall);

}

qs4();