//PRACTICE SET 10

//1.use a free api from internet and feed your app with the live data

let f = fetch("https://potterapi.onrender.com"); //return a promise that revolves to a response object
f.then((value)=>{
    console.log(value.status);
    console.log(value.ok);
    console.log(value.headers);
    //if(!res.ok){};
    return value.json();
}).then((value1)=>{
    console.log(value1);
}).catch((err)=>{
    console.log("error:", err);
})

//alternate
fetch("https://potterapi.onrender.com")
.then(res => res.json)
.then(data => console.log(data))
.catch(err => console.log("error: ", err))

//one liner alternate with await
(async () => {
  const data = await (await fetch("https://potterapi.onrender.com/en")).json();
  console.log(data);
})();


//alternate with async await 
