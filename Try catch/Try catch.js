console.log("Hello from PW Skills");
console.log("Congratulations !! You have enrolled to the course.");
console.log("You have completed HTML & CSS. Hurray !!");
let assignmentCompletion = false;

try {
    if (assignmentCompletion === false)
    throw new Error("You have not completed the Assignment");
    } catch (error) {
    console.log(error.message);
    } finally {
    console.log("You can now create Static webpages");
    }
console.log("You are now learning Javascript");


    /*
    OUTPUT:
    Hello from PW Skills
    Congratulations !! You have enrolled to the course.
    You have completed HTML & CSS. Hurray !!
    You have not completed the Assignment
    You can now create Static webpages
    You are now learning Javascript
    */