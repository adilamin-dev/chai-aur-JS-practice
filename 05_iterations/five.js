const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach((item)=>{console.log(item)});


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)


coding.forEach((item, index, coding)=>{
    console.log(item, index, coding)
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item["languageName"], "file name is: ", item["languageFileName"]);
})