// Immediately invoked functions Expressions (IIFE)


(function con(){                // named IIFE
    console.log("connected")
})();   // do not forget to mark this semicolon

( () => {
    console.log("connected two");
})();    // second paranthesis is for execution call  

( (name) => {
    console.log(`hello ${name}`);
})(hitesh);   


// IIFE --> there is a problem in the poolution of the global scope and for this problem we are using IIFE as a solution