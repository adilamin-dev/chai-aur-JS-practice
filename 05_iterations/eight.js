const myNums = [1, 2, 3]

// const myTotal = myNums.reduce((acc, cur)=> {
//     console.log(`acc: ${acc} and cur: ${cur}`);
//     return acc + cur
// }, 0)


const myTotal = myNums.reduce((acc, cur)=> acc+cur, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]


const totalPrice = shoppingCart.reduce((accPrice, curPrice)=> accPrice + curPrice.price, 0)

console.log(totalPrice);