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

