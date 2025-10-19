//write a js program to pretend to look like a hacker and write async funcs which displays the following output
// initializing hack program
// hacking his username
// username found ...
// connecting to facebook...


let delay = (ms) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        }, ms)
    })
}


async function typechar(text, ms){
    let out = '';

    for(const ch of text){
        out += ch;
        process.stdout.write(ch);
        await delay(ms);
    }
    process.stdout.write('\n');
    return out;
}

async function main1(){
    await typechar('initializing hack program', 150);
    await delay(2000);
    await typechar('hacking his username...', 150);
    await delay(3000);
    await typechar('username found! - "shradha_142"', 150);
    await delay(1000);
    await typechar('connecting to facebook...', 150);
    await typechar('. . .', 250)
    await delay(3000);
    await console.log("done!");
}

main1().catch(err => console.log('ERROR: ', err) );