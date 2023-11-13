// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Adil"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "adilamin.dev",
    fullName: {
        userFullName: {
            firstName: "Adil",
            lastName: "Amin"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 3: "f"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

console.log(obj3)


const users = [
    {
        id: 1,
        email: "adilamin.dev@gmail.com"
    },
    {
        id: 2,
        email: "adilamin537@gmail.com"
    },
    {
        id: 3,
        email: "adilamin9@hotmail.com"
    }
]

users[1].email


console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"));




const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseName, price, courseInstructor:instructor} = course;

console.table([courseName, price, instructor]);

