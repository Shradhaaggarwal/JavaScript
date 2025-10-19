let but = document.getElementById('butn');

let func = ((e) =>{
    let titlec = title.value;
    let descc = desc.value;
    localStorage.setItem("todo", JSON.stringify([titlec, descc]))
    todo.innerHTML = `
        <h1>${titlec}</h1>
        <p>${descc}</p>
    `
    console.log(e);
})

let funcd = ((e)=>{
    localStorage.removeItem("todo");
    todo.innerHTML = "";

})

but.addEventListener('click', func);
butd.addEventListener('click', funcd);