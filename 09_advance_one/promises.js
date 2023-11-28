const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})


promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()

    },1000)
}).then(function(){
    console.log("Promis 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({userName: "Adil Amin", email: "adilamin537@gmail.com"})
    },1000)
})


promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({userName: "Adil Amin", pass: "123"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.userName
}).then(function(uN){
    console.log(uN);
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log("The promise is either resolved or rejected");
})



const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({userName: "Adil", pass: "123"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log("promise 5: ", response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.lof("E: ", error)
//     }
// }

// getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((user)=>{
    console.log(user)
})
.catch((error)=>{
    console.log(error)
})