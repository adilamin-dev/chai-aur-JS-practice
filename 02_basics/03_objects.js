// singleton
// Object.create

// Object literals

const mySymb = Symbol("key1")

const JsUser = {
    myName: "Adil Amin",
    [mySymb]: "new Key1",
    age: 25,
    location: "Bajitpur",
    email: "adilamin.dev@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySymb]);

// Object.freeze(JsUser); // freezing Object
JsUser.email = "adilamin.dev@gmail.com"

console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.myName}`);
}


console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())





