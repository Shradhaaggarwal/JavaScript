// let s = fetch("http://goweather.xyz/weather/Berlin");

// s.then((value)=>{
//     console.log(value.status);
//     console.log(value.ok);
//     console.log(value.headers);
//     return value.json();
//     //headers, .fromdata, .text, .arraybuffer
// }).then((value1)=>{

//     console.log(value1);
// })
//response headers and req headers


//sending post request

let func = async (todo) =>{
    let options = {
        method: 'POST', 
        headers: {
            "Content-type": "application/json"
        }, //yaha se stringyfy ko utha ke func2 mai dalke variable use kr re h //todo
        body: JSON.stringify(todo),
    }

    let postm = await fetch('https://jsonplaceholder.typicode.com/posts' , options);
    let response = await postm.json();
    return response;
}

let gettodo = async (id) =>{
    let t = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await t.json();
    return r;
}

const func2 = async () =>{
    let todo = {
        
            title: 'shradha',
            body: 'aggarwal',
            userId: 220467
        
    }
    // let todor = await func(todo);
    console.log(await func(todo));
    console.log(await gettodo(10));
}

func2();

//Cookies - SMALL STRINGS OF DATA STORED DIRECTLY IN BROWSER

// set-cookie http header can be used to set cookie

//alert(document.cookie); - key value pairs separated by semi colon 
console.log(document.cookie);

document.cookie ="name=shradhaagggarwal"; //SET CALL HOTI H
document.cookie ="name1=shrreyaaggarwal";

document.cookie ="name=agggarwal"; //namme wla update hoga

// let key = prompt("enter key: ");
// let value = prompt("enter value: ");

//WAY TO STORE SPECIAL CHARACTERS

// document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`; //; = agr key m aaye toh vo bhul skta h..isliye 

//decode('....');
console.log(document.cookie); //only updates and adds 

//COOKIE OPTIONS - everything after ; are options
Document.cookie = "name = ; path = /a ; expires = Tue, 29 March 2025 03:18:30 GMT; "

//4KB LIMIT AND AROUND 20+ LIMIT ON NO OF COOKIES



// Local storage - not sent to browser with each req (unlike cookies)
//--this data survives a page refresh and even full browser restart - these methods are local storage methods (asa cookies mai b hota h agr expiry date nahi daali hai toh)

let keyl = prompt("enter the key: ");
let valuel = prompt("enter the value: ");
localStorage.setItem(keyl, valuel);
console.log(`value at ${keyl} is ${valuel}`); //wrong
console.log(`value at ${keyl} is ${localStorage.getItem(keyl)}`); //correct
console.log(localStorage.getItem(keyl));

//removeItem - removes a corresponding entry
//clear - clears the whole local storage
console.log(localStorage.length);//.length
console.log(localStorage.key(0)); //key(index)

//as an obj bhi use kr skte hian
// localStorage.one = 1;
// alert(localStorage.one);
// delete localStorage.one;

//json.stringify - json to string
///json.parse - string to json


//Session Storage
//survives refresh not anything else

//storage event
window.onstorage = (e) =>{
    alert("changed");
    console.log(e);
}



