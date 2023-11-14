var c = 30
let a = 101


// if(true){
//     let a = 10
//     const b = 20
//     // console.log("Inner: ", a)
// }


// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const userName = "Adil"

    function two(){
        const website = "youtube"
        console.log(userName);
    }
    // console.log(website);

    two()
}

// one()


// if(true){
//     const userName = "adil9 "
//     if (userName === "adil9 "){
//         const website = "adilamin.com"
//         console.log(userName + website);
//     }
//     // console.log(website);
// }

// console.log(userName);


// ------------------------------------------------

console.log(addOne(5));

function addOne(num){
    return num + 1;
}


// console.log(addTwo(5));

const addTwo = function(num){
    return num + 1;
}
