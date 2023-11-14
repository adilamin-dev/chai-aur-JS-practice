// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB Connected!`);
})();


((param) => {
    console.log(`DB Connected with ${param}!`);
})("arrow func")