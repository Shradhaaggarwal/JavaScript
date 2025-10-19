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
// console.log(a);
// a.run();
// console.log(a.name);


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

// shradhaform.submit();
// hemantform.submit();
// hemantform.cancel();

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

// fanimal.eating();
// fanimal.coloris();
// sanimal.fav();
// sanimal.coloris();


//method overrriding
class employee{
    constructor(name){
        this.name = employee.capital(name); //easy peasy //employee.capital se he chalega bss 
        console.log(`${this.name} is the employee`);
    }
    login(){
        console.log("logged in");
    }
    logout(){
        console.log("logged out");
    }
    reqleaves(leave){
        console.log(`${leave} leaves granted`);
    }
    static capital(name){
        return name[0].toUpperCase() + name.substr(1,name.length);
    } //static will belong to the whole cllas and not to an object
}

class prog extends employee{
    constructor(name){
        super(name);
        console.log(`and ${this.name} is a programmer`);
    } //agar nahi bnaya hota toh auto call hojata with super
    //agar bnaya h toh super is compulsory
    //super must be before this.
    lang(lang){
        console.log(`programs in ${lang}`);
    }
    reqleaves(leave){
        super.reqleaves(leave);
        console.log(`extra leave granter ${leave +1}`);
    }
}
// let emp = new employee("shradha");
// emp.reqleaves(2);

// let pro = new prog("hemant");
// pro.reqleaves(2);

// pro.capitalize //wont work because not allowed


//getters and setters and instace of
class ani{
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
}

class peni extends ani{
    eat(){
        console.log("we eat");
    }
}

let aniobj = new ani("rabbit");
let peniobj = new peni;

// console.log(aniobj.name);
peniobj.name = "carrot";
// console.log(peniobj.name);

// console.log(peniobj instanceof ani);
// console.log(peniobj instanceof peni);

//PRACTICE SET 11
//1. Create a js class to create a complex no., create a cons to set a real and imaginary part of the complex num
//2. write a method to add two complex numbers
//4. use getters and setters

class complexno {
    constructor(real, ima){
        this._real = real;
        this._ima = ima;
    }

    get realno(){
        return this._real;
    }
    get imano(){
        return this._ima;
    }
    set realno(realnew){
        this._real = realnew;
    }
    set imano(imanew){
        this._ima = imanew;
    }
    add(other){
        return new complexno(this._real+ other.realno, this._ima+other.imano);
    }
    display() {
    console.log(`${this._real} + ${this._ima}i`);
}
}

let cno = new complexno();
let cno1 = new complexno();
cno.realno = 3;
cno.imano = 5;
cno1.realno = 1;
cno1.imano = 1;
let cno2 = cno.add(cno1);
cno2.display();


//3. make a student class inherited from human and override a method and see changes
class human{
    constructor(name){
        this.name = name;
    }

    eats(){
        console.log("i eat");
    }

    breaths(){
        console.log("i breathe");
    }
    travels(veh){
        this.veh = veh;
        console.log("i travel: " + this.veh);
    }
}

class student extends human{
    studies(){
        console.log("i study as well");
    }
    travels(bus){
        super.travels(bus);
        console.log("to go to school");
    }
}

let stu = new student;
stu.travels("by bus");
console.log(stu instanceof human);
