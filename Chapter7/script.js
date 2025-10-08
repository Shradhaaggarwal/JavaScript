console.log("hello im chapter 7");

//document.title;
//document.head;
//document.body;
//document.documentElment;


//agar bichme enter hoga toh firstchild will be text, else div
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);
// console.log(elem.childNodes.firstChild);

//$0, $1
//--$0.childNodes


//siblings and parents
document.body.nextSibling;
document.body.previousSibling;
document.body.parentElement;
document.body.parentNode;

//accessing direct element and not text.
document.body.firstElementChild; //with prev, next, first, last
