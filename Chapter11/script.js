//prototype
let a = {
    name: "shradha",
    age: 21,
    // run : () =>{
    //     alert("self run");
    // }

}

let p = {
    run: () =>{
        alert("run proto");
    }
}

p.__proto__ = {
    name: "hemant"
}
a.__proto__ = p;
console.log(a);
a.run();
console.log(a.name);


//Classes and objects and constructors
class railwayForm{
    constructor(cusname, trainno){
        this.name = cusname;
        this.trainno = trainno;
    }
    submit(){
        alert(this.name + "'s form is submitted " + this.trainno);
    }
    cancel(){
        alert(this.name +"'s form is cancelled "+ this.trainno);
    }
    // fill(cusname, trainno){
    //     this.name = cusname;
    //     this.trainno = trainno;
    // }
}

// let shradhaform =  new railwayForm();
// shradhaform.fill("shradha", 220467);

// let hemantform  = new railwayForm();
// hemantform.fill("hemant", 220469);


let shradhaform =  new railwayForm("shradha", 220467);
let hemantform  = new railwayForm("hemant", 220469);

shradhaform.submit();
hemantform.submit();
hemantform.cancel();

//inheritance and extends 
class animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    eating(){
        console.log(this.name + "is eating!!");
    }
    running(){
        console.log(this.name + "is running!!");
    }
    coloris(){
        console.log(this.name + "color is" + this.color);
    }
}

class monkey extends animal{
    fav(){
        console.log(this.name + "'s fav is banana");
    }
}

let fanimal = new animal("cat", "black");
let sanimal = new monkey("monkey", "brown");

fanimal.eating();
fanimal.coloris();
sanimal.fav();
sanimal.coloris();