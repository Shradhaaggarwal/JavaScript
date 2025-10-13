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