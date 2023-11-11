const myName = "Adil"
const repoCount = 50

// console.log(myName + repoCount + "Somethings else");

console.log(`Hi, my name is ${myName} and my repo count is ${repoCount}.`);

const myString = new String('Adil-Amin');


// console.log(myString[0]);
// console.log(myString.__proto__);
console.log(myString.charAt(2));
console.log(myString.indexOf('i'));

const newString = myString.substring(0, 3);
console.log(newString);

const anotherString = myString.slice(-8, 3);
console.log(anotherString);

const newStringOne = "         Adil   Amin  ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://adilamin.com/profile%20page";
console.log(url.replace('%20', '-'));
console.log(url.includes('.com'));

console.log(myString.split('-'));




// ---------------- String Methods -----------------

// 1. String {'Adil'}
// 	1. 0: "A"
// 	2. 1: "d"
// 	3. 2: "i"
// 	4. 3: "l"
// 	5. length: 4
// 	6. [[Prototype]]: String
// 		1. anchor: ƒ anchor()
// 		2. at: ƒ at()
// 		3. big: ƒ big()
// 		4. blink: ƒ blink()
// 		5. bold: ƒ bold()
// 		6. charAt: ƒ charAt()
// 		7. charCodeAt: ƒ charCodeAt()
// 		8. codePointAt: ƒ codePointAt()
// 		9. concat: ƒ concat()
// 		10. constructor: ƒ String()
// 		11. endsWith: ƒ endsWith()
// 		12. fixed: ƒ fixed()
// 		13. fontcolor: ƒ fontcolor()
// 		14. fontsize: ƒ fontsize()
// 		15. includes: ƒ includes()
// 		16. indexOf: ƒ indexOf()
// 		17. isWellFormed: ƒ isWellFormed()
// 		18. italics: ƒ italics()
// 		19. lastIndexOf: ƒ lastIndexOf()
// 		20. length: 0
// 		21. link: ƒ link()
// 		22. localeCompare: ƒ localeCompare()
// 		23. match: ƒ match()
// 		24. matchAll: ƒ matchAll()
// 		25. normalize: ƒ normalize()
// 		26. padEnd: ƒ padEnd()
// 		27. padStart: ƒ padStart()
// 		28. repeat: ƒ repeat()
// 		29. replace: ƒ replace()
// 		30. replaceAll: ƒ replaceAll()
// 		31. search: ƒ search()
// 		32. slice: ƒ slice()
// 		33. small: ƒ small()
// 		34. split: ƒ split()
// 		35. startsWith: ƒ startsWith()
// 		36. strike: ƒ strike()
// 		37. sub: ƒ sub()
// 		38. substr: ƒ substr()
// 		39. substring: ƒ substring()
// 		40. sup: ƒ sup()
// 		41. toLocaleLowerCase: ƒ toLocaleLowerCase()
// 		42. toLocaleUpperCase: ƒ toLocaleUpperCase()
// 		43. toLowerCase: ƒ toLowerCase()
// 		44. toString: ƒ toString()
// 		45. toUpperCase: ƒ toUpperCase()
// 		46. toWellFormed: ƒ toWellFormed()
// 		47. trim: ƒ trim()
// 		48. trimEnd: ƒ trimEnd()
// 		49. trimLeft: ƒ trimStart()
// 		50. trimRight: ƒ trimEnd()
// 		51. trimStart: ƒ trimStart()
// 		52. valueOf: ƒ valueOf()
// 		53. Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
// 		54. [[Prototype]]: Object
// 			1. constructor: ƒ Object()
// 			2. hasOwnProperty: ƒ hasOwnProperty()
// 			3. isPrototypeOf: ƒ isPrototypeOf()
// 			4. propertyIsEnumerable: ƒ propertyIsEnumerable()
// 			5. toLocaleString: ƒ toLocaleString()
// 			6. toString: ƒ toString()
// 			7. valueOf: ƒ valueOf()
// 			8. __defineGetter__: ƒ __defineGetter__()
// 			9. __defineSetter__: ƒ __defineSetter__()
// 			10. __lookupGetter__: ƒ __lookupGetter__()
// 			11. __lookupSetter__: ƒ __lookupSetter__()
// 			12. __proto__: (...)
// 			13. get __proto__: ƒ __proto__()
// 			14. set __proto__: ƒ __proto__()
// 		55. [[PrimitiveValue]]: ""
// 	7. [[PrimitiveValue]]: "Adil"
