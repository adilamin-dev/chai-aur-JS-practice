const user = {
    userName: "Adil",
    price: 999,
    wcMessage: function(){
        console.log(`${this.userName}, welcome to website!`);
        console.log(this)
    }
}

// user.wcMessage()

// console.log(this)


// function chai(){
//     let userName = "Adil"
//     console.log(this.userName);
// }

// chai()


// const cofee = function(){
//     let cofeeUser = "Adil"
//     console.log(this.cofeeUser);
// }

// cofee()


const arrowFunc = () => {
    let afUser = "Adil"
    console.log(this);
}

arrowFunc()



// const addTwo = (num1, num2,) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2,) => num1 + num2

// const addTwo = (num1, num2,) => (num1 + num2)

const addTwo = (num1, num2,) => ({userName: "adil"})


console.log(addTwo(3, 4));


