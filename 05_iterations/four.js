const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

for(const key in myObject){
    console.log(`Key is: ${key} and value is: ${myObject[key]}`);
}


const programming = ["js", "rb", "py", "java", "cpp"]

for(const key in programming){
    console.log(programming[key]);
}


const map = new Map()
map.set('BD', "Bangladesh")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for(const key in map){
    console.log(key);
}