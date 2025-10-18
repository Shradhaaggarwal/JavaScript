// //PRACTICE SET 10

// //1.use a free api from internet and feed your app with the live data

// let f = fetch("https://potterapi.onrender.com"); //return a promise that revolves to a response object
// f.then((value)=>{
//     console.log(value.status);
//     console.log(value.ok);
//     console.log(value.headers);
//     //if(!res.ok){};
//     return value.json();
// }).then((value1)=>{
//     console.log(value1);
// }).catch((err)=>{
//     console.log("error:", err);
// })

// //alternate
// fetch("https://potterapi.onrender.com")
// .then(res => res.json)
// .then(data => console.log(data))
// .catch(err => console.log("error: ", err))

// //one liner alternate with await
// (async () => {
//   const data = await (await fetch("https://potterapi.onrender.com/en")).json();
//   console.log(data);
// })();


// //alternate with async await 
// async function getdata() {
//     let fa = await fetch("https://potterapi.onrender.com/en");
//     let res = await fa.json();
//     console.log(res);
// }
// getdata();

//with post
// async function withpost(harrypotter) {
//     let option ={
//         method : 'POST',
//         headers : {
//             "content-type" : "application/json"
//         },
//         body : JSON.stringify(harrypotter)
//     }
//     let ff = await fetch("https://jsonplaceholder.typicode.com/posts", option);
//     // ff.then(res => res.json()).then(data=> console.log(data))
//     let res = await ff.json();
//     return res;
// }

// async function getlang(lang) {
//     let ff = await fetch("https://jsonplaceholder.typicode.com/posts/" + lang);
//     let res = await ff.json();
//     return res;
// }

// async function final() {
//     let harry = {
//         title: "harry",
//         body: "potter"
//     }
//     console.log(await withpost(harry));
//     console.log(await getlang(1));
// }
// final();

//2. create a note storing app that saves it in local storage

let id = prompt("enter the title: ");
let note = prompt("enter the note: ");

localStorage.setItem(id, note);
console.log(localStorage.getItem(`${id}`));

let del = confirm("do you want to delete? ");
if(del == true){
    let what = prompt("what key? ");
    localStorage.removeItem(`${what}`);
    window.onstorage = (e) =>{alert("changed!!");}

}