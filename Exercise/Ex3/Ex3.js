//elem.innerHTML is used to populate a div with html, search about it.
//create a website with a div tag containing a random joke givein an array of jokes
//use math.random adn fetch the jokes from internet.
//size=10 and new joke with each reload

let arr = ['shradha', 'hemant', 'udit', 'bhumika', 'bhawna', 'dakshi', 'aakankshi'];

function ran(a){
    let x = Math.floor(Math.random() * a.length);
    return a[x];
}

alert(ran(arr));
while(confirm('continue?')){
    alert(ran(arr));
}