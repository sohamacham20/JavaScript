const name ='soham';
const repocont=2;

console.log(`my name is ${name} and my repo count is ${repocont}`);

const gameName=new String('hitman');
console.log(gameName);
console.log(typeof gameName); //object
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.length);
console.log(gameName[0]);
console.log(gameName[gameName.length-1]);
console.log(gameName.__proto__); 
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4);
console.log(newString);

const anStr= gameName.slice(-5,4);
console.log(anStr);

const str1 = "    Jai Jinendra    ";
console.log(str1);
console.log(str1.trim()); //trim is used to remove the whitespaces from the string

const url = "https://www.youtube.com/%20watch?v=5qap5aO4i9A";
console.log(url)
console.log(url.includes('youtube'));
console.log(url.replace('%20', '-'));

console.log(gameName.split('-'))