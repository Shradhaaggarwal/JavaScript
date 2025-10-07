//strings -- immutable 

let name = "shradha";
let namee = 'aggar';
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(0,4)); //4 not included
console.log(name.slice(2));
console.log(name.substring(0,4)); //4 not included
console.log(name.replace("shra","pra"));
console.log(name.concat(" singh"));
console.log(name.trim());
console.log(name.charAt(2));
console.log(name.indexOf("a"));
console.log(name.lastIndexOf("a"));
console.log(name.split(""));
console.log(name.split("a"));
console.log(name.includes("s"));
console.log(name.startsWith("s"));
console.log(name.endsWith("a"));
console.log(name.repeat(3));
console.log(name.search("d"));
console.log(name.match("a"));
console.log(name.match(/a/g));
console.log(name.match(/a/gi));
console.log(name.padStart(10));
console.log(name.padEnd(10,"*"));
console.log(name.padEnd(10,"123444"))
console.log(name[0]);

//template literals -- string interpolation
let names = "shraddha";
let age = 21;

console.log(`${names} is ${age} years old`);

//escape sequence characters
let name1 = "shradha\"s";
console.log(name1);
let name2 = "shradha\'s";
console.log(name2);
let name3 = "shradha\\s";
console.log(name3);
let name4 = "shradha\ns";
console.log(name4);
let name5 = "shradha\ts";
console.log(name5);
let name6 = "shradha\bs";
console.log(name6);
let name7 = "shradha\fs";
console.log(name7);
let name8 = "shradha\rs";
console.log(name8);


//PRACTICE SET 4

//1. extract the amout from the string "please give Rs 1000"
let str = "please give Rs 1000";
console.log(str.slice(15));
console.log(str.split(" ")[3]);
console.log(str.replace("please give Rs ", ""));
console.log(str.substring(15));
