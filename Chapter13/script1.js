// const helloo = ()=>{
//     console.log("hello");
// }
// const aahello = (name) =>{
//     console.log("hello" + name);
// }
// module.exports = {helloo, aahello};
//same as (hello: hello, ahello: ahello);



//ES6 modules
//1.
export const helloo = ()=>{
    console.log("hello");
}
export const aahello = (name) =>{
    console.log("hello" + name);
}

//2.
const harry = () =>{
    console.log("happpppyyy");
}

export default harry;

