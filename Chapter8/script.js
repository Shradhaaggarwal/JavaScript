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
