let x = document.body.getElementsByTagName('span')[0];
console.log(x); //element
console.dir(x); //as an object

console.log(document.body.firstChild.nodeName); //text
console.log(document.body.firstElementChild.nodeName); //span

//innerHTML AND outerHTML
//first.innerHTML
// first.innerHTML = hello
// first.innerHTML = 'hello'
// first.outerHTML //'<span id="first">hello</span>'
// first.outerHTML = '<div> im outter html </div>'

//.data, .nodeValie, .textContent
console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)
console.log(document.body.textContent)
//$0.hidden = false
//first.hidden = false;

//HTML attributs and methods

//has
console.log(first.hasAttribute('hidden'));
console.log(first.hasAttribute('class'));
console.log(has.hasAttribute('hidden'));

//get
console.log(first.getAttribute('id'));

//set
first.setAttribute("class","setclass");
console.log(first.getAttribute('class'));

//remove
first.removeAttribute("class");
//attribute
console.log(first.attributes);

//userdefined attributes
console.log(userDattribute.attributes); //all
console.log(userDattribute.dataset); //user defined

//INSERTION METHODS
//method1
// console.log(document.body.getElementsByTagName('div'));
let a = document.body.getElementsByTagName('div')[2];
a.innerHTML = a.innerHTML + '<h1>hello world with innerHTML + tag</h1>';

//method2
let h1 = document.createElement('h1');
h1.innerHTML = '<h3> hello world with .createElement and .innerHTML and append </h3>';
a.append(h1)

let pre = document.createElement('p');
pre.innerHTML = '<p><b>prepend</b></p>'
// a.prepend(pre);
// a.before(pre);
// a.after(pre);
a.replaceWith(pre);

//method3
adjcont.insertAdjacentHTML('beforebegin', '<p>before begin</p>')
adjcont.insertAdjacentHTML('beforeend', '<p>before end</p>')
adjcont.insertAdjacentHTML('afterbegin', '<p>after begin</p>')
adjcont.insertAdjacentHTML('afterend', '<p>after end</p>')

adjcont.insertAdjacentText('beforebegin', '👋 Hi ');

let p = document.createElement('p');
p.textContent = "adjacent element";
adjcont.insertAdjacentElement('afterend', p);
// adjcont.insertAdjacentHTML('afterend', '<p>after end</p>')

// adjcont.remove();

//CLASSLIST AND CLASSNAME

id.classList.add("tcolor");
id.classList.toggle("red");
id.classList.toggle("red");
console.log(id.classList.contains('red'));
//.remove
id.className = "yellow tcolor"
console.log(id.classList);


//settimeout
// let q = setTimeout(function(){
//     alert("hello");
// }, 2000);
// console.log(q);



//with a function
// let sum = (a,b) =>{
//     console.log("running"+ a+b);
// }
// setTimeout(sum, 5000, 1, 5);



//set interval
// setInterval(function(){
//     alert("hi")
// }, 7000)
// clearInterval();

//EVENT HANDLERS
let v = document.getElementsByClassName('but')[0];
v.onclick = () =>{
    let y = document.getElementsByClassName('but')[0];
    y.innerHTML = 'im clicked';
}
//js wala onclick mana jayega in case of conflict


//addEventListener and remove event listener
let but1 = document.getElementById("but1");
let fun1 = function(e){
    alert("hello im fun1");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.type);
    // console.log(e.clientX, e.clientY);
}
let fun2 = function(e){
    alert("hello im fun2");
}

let clicked = function(e){
    let xx = prompt("enter a numeber: ");
    if(xx==1){
    but1.removeEventListener('click',fun1);
}
}

but1.addEventListener('click', clicked);
but1.addEventListener('click', fun1);
but1.addEventListener('click', fun2);
//e = event object


//PRACTICE SET 8
//1. create diff alerts when diff buttons are clicked

let psb1e = function(e){
    alert("psb1 is clicked");
}

let psb2e = function(e){
    alert("psb2 is clicked");
}

psb1.addEventListener('click', psb1e);
psb2.addEventListener('click', psb2e);

//2. buttons to reach diff websites with diff buttons
//direct anchor tag use krlo <a href="google.com"><button>google</button></a>
//OR
document.getElementById('google').addEventListener('click',function(e){
    window.location = "https://google.com";
})

//3. write a js program to keep fetching data from a website every 5 sec.
//later

//4. Create a bulb using toggle method
let bulb = document.getElementById('bulb');
let even = function(e){
    bulb.classList.toggle("bulbon");
    if (bulb.classList.contains('bulbon')) {
        bulb.classList.remove('bulboff');
        bulb.textContent = 'on';
    } else {
        bulb.classList.add('bulboff');
        bulb.textContent = 'off';
    }
}


bulb.addEventListener('click', even);
