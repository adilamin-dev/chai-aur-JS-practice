const myName = "Adil"
const repoCount = 50

// console.log(myName + repoCount + "Somethings else");

console.log(`Hi, my name is ${myName} and my repo count is ${repoCount}.`);

const myString = new String('Adil-Amin');


// console.log(myString[0]);
// console.log(myString.__proto__);
console.log(myString.charAt(2));
console.log(myString.indexOf('i'));

const newString = myString.substring(0, 3);
console.log(newString);

const anotherString = myString.slice(-8, 3);
console.log(anotherString);

const newStringOne = "         Adil   Amin  ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://adilamin.com/profile%20page";
console.log(url.replace('%20', '-'));
console.log(url.includes('.com'));

console.log(myString.split('-'));