// console.log(2==1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2>1);
// console.log(2<1);
// console.log(2!=1);


console.log("2"==2)
console.log(null>0)
console.log(null==0)
console.log(null>=0) 
// here the reason is that the an equality check == and comparison operator <,>,>=,<= works differently
// comparison converts null to a number treeating it as 0 
// thats why null>=0 is true null>0 is false


console.log(undefined==0)
console.log(undefined>0)
console.log(undefined<0)

/// always retrun false for undefined and null when compared with any other value except for null==undefined which is true

/// === is an opertor which is called as strict check operator which checks for both value and type
console.log(2==="2")
console.log(2==="2")