// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

constisLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('124');
const anotherId = Symbol('123');
console.log(id === anotherId);

const bigNumber = 78934897398475983425892375n;






// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    myName: "Adil Amin",
    age: 25,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction);


// -------------------- memory ---------------------------


// Stack (Primitive), Heap (Non-Primitive)

let myName = "Adil"
let anotherName = myName
anotherName = "Adil Amin"

console.table([myName, anotherName]);

let userOne = {
    email: "adilamin537@gmail.com"
}

let userTwo = userOne;
userTwo.email = "adilamin.dev@gmail.com"

console.table([userOne.email, userTwo.email]);
