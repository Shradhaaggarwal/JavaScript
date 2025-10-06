//arrays

let arr = [1,2,null, "not present"];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[2]);
arr[1] = 3;
console.log(arr);
arr.push(4);
console.log(arr);
arr.pop();
console.log(arr);

let b = arr.toString();
console.log(b);

let c = arr.join(" * ");
console.log(c);


arr.shift();
console.log(arr);
arr.unshift(0);
arr.unshift(1);
console.log(arr);

delete arr[0]; //length does not change
console.log(); 

//num.concat(num2);
arr.sort();
console.log(arr); //sort as string 
arr.reverse(); 
console.log(arr);


//to sort use compare func
let comapre = (a,b) =>{
    return a-b;
}
arr.sort(comapre);
console.log(arr);

//reverse




//splice and slice
let nums = [2,4,6,8,10];
nums.splice(1,2,3,5); //start index, delete count, add elements
console.log(nums);

nums.slice(3); //from index 3 to end
console.log(nums);
let newNums = nums.slice(1,4); //from index 1 to 4 (4 not included)
console.log(newNums);




//foreach forin forof
for(let index in nums){
    console.log(index); //gives index
}
for(let value of nums){
    console.log(value); //gives value
}
nums.forEach((element) =>{
    console.log(element * element);
})


//Map
console.log("----------map");
let array = [2,4,6,8,10];
let ans = array.map((ele, ind, array)=>{
    console.log(ele, ind, array);
    return ele;
})
console.log(ans); //new array with same elements as original

//filter
let ans2 = array.filter((val)=>{
    return val>5;
})
console.log(ans2); //new array with elements satisfying condition

//reduce
let arr3 = [1,2,3,4,5];
const addition = (a,b) =>{
    return a+b;
} 
console.log(`sum of elements of ${arr3} is ` + arr3.reduce(addition)); //1+2+3+4+5



//PRACTICE SET 5
//1. Create an array and add numbers entered by the user.

/*
let arr4 = [];
for(let i=0; i<5; i++){
    let num = parseInt(prompt("Enter a number: "));
    while(num!=0){
        arr4.push(num);}
}
*/

//2. Add numbers till the user enters 0

/*
let ar = [];
while(true){
    let n = parseInt(prompt("enter: "));
    if(n==0){
        break;
    }
    ar.push(n);
}
console.log(ar);
*/

//4. filter numbers divisible by 10 from a given array

let arr5 = [10, 20, 14, 15, 30];
let ansarr = arr5.filter((val)=>{
    return val%10==0;
})
console.log(ansarr);


//5. Create a new array that contains the squares of the elements of another array
let arr6 = [1,2,3,4,5];
let anssarr = arr6.map((val)=>{
    return val*val;
})
console.log(anssarr);



//6. Find the product of all the elements in an array
let arr7 = [1,2,3,4];
let aarr = arr7.reduce((a,b)=>{
    return a*b;
})
console.log(aarr);