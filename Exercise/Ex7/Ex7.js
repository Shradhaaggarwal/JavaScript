//Create a password generator with atleast one lowercase one uppercase and one special character.
//use password class to create the same

class passgen{
    constructor(){
        console.log("welcome to the password generator");
        this.p = "";
    }

    genpas(len){
        let lower = "abcdefghijklmnopqrstuvwxyz";
        let upper = "ABCDEFHIJKLMNOPQRSTUVWXYZ";
        let special = "!@#$%^&*()_+{}|:;<>?/\\";
        let num = "1234567890";
        if(len<4){
            console.log("too short, try again");
            return;
        } else{
            let i=0;
            while(i<len){
                this.p+= lower[Math.floor(Math.random()*lower.length)];
                this.p+= upper[Math.floor(Math.random()*upper.length)];
                this.p+= special[Math.floor(Math.random()*special.length)];
                this.p+= num[Math.floor(Math.random()*num.length)];
                i+=4;
            }
            this.p = this.p.slice(0,len);
            return this.p;
        }
    }
}

let password = new passgen();
console.log(password.genpas(4));