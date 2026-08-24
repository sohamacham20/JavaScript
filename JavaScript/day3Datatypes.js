//dataypes are of two types 
//1. Primitive Data Types

//--> String, Number, Boolean, Undefined, Null, Symbol, BigInt

const id = Symbol('123');
const anotherID = Symbol('123');

console.log(id === anotherID) // false

const bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt);

//2. Reference Data Types
//Array, Object, Function
//ARRAy
const avengers = ['Iron Man', 'Captain America', 'Thor', 'Hulk', 'Black Widow'];
//object
let muOb={
    name:"saakshi",
    age:22,
    city:"pune"
}
//function
const myfunction = function(){
    console.log("Hello, World!");
}

// *********************************************************************************************************

// memory allocation in js
// Stack and Heap Memory
// stack stores the primitive datatypes
// stack gives the copy of the primitive datatypes to the variable


let myname="soham";
yourname=myname;
console.log(myname)
console.log(yourname)
yourname="yuktaa"
console.log(yourname) // here the copy of the name was provided and not the reference so 
// when we change the yourname it will not affect the myname

//heap memory stores the reference datatypes
//when we assign the reference datatypes to the variable it will give the reference of the variable to the other variable

let userOne={
    name:"soham",
    age:22,
    email:"soham@example.com"
}

let usertwo=userOne;

usertwo.email="yuktaa@example.com"

console.log(userOne.email) // here the reference of the userOne was provided 
// to the usertwo so when we change the usertwo it will also affect the userOne