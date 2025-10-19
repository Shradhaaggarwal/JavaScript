//create a digital seconds clock using setinterval and date object in js
//date object can be used used to get date time hours and seconds which can be updated using setINTERVAL

let clock = document.createElement('h1');
document.body.append(clock);
function update(){
    let time = new Date()
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    clock.textContent = `${h} : ${m} : ${s}`;
}

update()
setInterval(update, 1000)