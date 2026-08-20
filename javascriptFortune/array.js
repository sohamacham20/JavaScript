// let arr =[1,2.5,"MERN",true,null,undefined,Symbol("id")]

// console.log(arr[1])
//console.log(arr[2,3])

// Array can store similar as well as different types of data
// In java script array is dynamic in nature
fruits =["apple","banana","mango","pineapple"]

console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);

console.log( )
console.log( )
console.log( )
console.log( )
console.log(fruits)
console.log()

fruits[0]="kiwi";
console.log(fruits);

fruits.pop() //remove last element // to remove the required element give the parameter as that particular element eg . fruit.pop("mango")
console.log(fruits)

fruits.push("orange") // add element to last position
console.log(fruits)

fruits.shift()// remove the first element
console.log(fruits)

fruits.unshift("dragon fruit")// add the element to the first
console.log(fruits)

// slicing
let arr =[10,20,30,40,50,60]
let arr2 = arr.slice(0,4)
console.log(arr2)
console.log(arr.slice(1,4))
console.log(arr.splice(1,2))

let employee=[
    {
        emp_name:"saakshi",
        salary:50000
    },
    {
        emp_name:"soham",
        salary:50000
    },
    {
        emp_name:"yuktaa",
        salary:50000
    }
];

console.log(employee[1].emp_name)