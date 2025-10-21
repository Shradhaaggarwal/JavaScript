//the HTML audioElement interface can be used to play an audio
//create an alarm clock that plays an audio at the specified time by the user

function play(){
    let audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
}
let setclock = false, wh, wm;

let clock = document.getElementById("clock");
let hours = document.getElementById("hours");
let mins = document.getElementById("mins");

// for(let i=0; i<24; i++){
//     let opt = document.createElement("option");
//     opt.value = i;
//     opt.textContent = Sting(i).padStart(2,'0');
//     hours.appendChild(opt);
// }

let update = () =>{
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    clock.textContent = ` ${String(h).padStart(2,'0')} : ${String(m).padStart(2,'0')} : ${String(s).padStart(2,'0')}`

    if(wh === h && wm === m && s===0){
        play();
        setclock = false;
    }
}

let butn = document.getElementById("set");
butn.addEventListener('click', (e) =>{
    wh = parseInt(hours.value);
    wm = parseInt(mins.value);
    setclock = true;
    alert(`Alarm set for ${String(wh).padStart(2,'0')}:${String(wm).padStart(2,'0')}`);
})


setInterval(()=>{
    update()
},1000);


for(let i=0; i<24; i++){
    let opt = document.createElement("option")
    opt.value = i;
    opt.textContent = String(i).padStart(2,'0');
    hours.appendChild(opt);
}

for(let i=0; i<=59; i++){
    let opt = document.createElement("option");
    opt.value = i;
    opt.textContent = String(i).padStart(2,'0');
    mins.appendChild(opt);
}