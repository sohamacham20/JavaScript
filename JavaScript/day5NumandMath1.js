const score =100;
console.log(score);

const Balance = new Number(100);
console.log(Balance);

console.log(Balance.toString());
console.log(typeof Balance);

// for precision we can use toFixed() method
console.log(Balance.toFixed(2));
 // precision value can be used for the fixed point round off

 const num = 13.3434544
 console.log(num.toFixed(3));

 //Converts to the , 
 const hundred = 10000000;
 console.log(hundred.toLocaleString('en-US')); // 10,000,000

//  %%%%%%%%%%%%Math%%%%%%%%%%%%
console.log(Math.PI);
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.abs(-4));
console.log(Math.sqrt(64));
console.log(Math.pow(2,3));

console.log(Math.random)