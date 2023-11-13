// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3, 4)

console.log("result: ", result)



function loginUserMessage(userName = "user"){
    
    return `${userName} just logged in.`
    
}

console.log(loginUserMessage("Adil"));




function calculateCartPrice(...num){
    return num
}
console.log(calculateCartPrice(30, 45, 567, 27, 686));



const user = {
    userName: "Adil",
    price: 356
}

function handleObject(anyUser){
    console.log(`User name is ${anyUser.userName} and price is ${anyUser.price}`)
}
handleObject(user)




const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));