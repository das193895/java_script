// Creating a New Array
let techStack = ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB", "Git"];
let newArrayCreated = [...techStack];
console.log(newArrayCreated); // OUTPUT: ["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB", "Git"];

/************************************/

// Concatenating two arrays
let arr1 = ["HTML", "CSS", "JS"];
let arr2 = ["React", "Node", "Express"];
let concatenated_array = [...arr1,...arr2];
console.log(concatenated_array); // OUTPUT: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Express' ]

/************************************/


// Spread an array of arguments to be passed as individual params
function maxOfThreeNumbers(num1, num2, num3) {
return Math.max(num1, num2, num3);
}
let arrayOfNumbers = [4, 5, 3];
console.log(maxOfThreeNumbers(...arrayOfNumbers)); // OUTPUT: 5

/************************************/

// Using with Strings
let str = "Hello world";
let str_array = [...str];
console.log(str_array);  // OUTPUT : ["H","e","l","l","o"," ","w","o","r","l","d"]

/************************************/

// Spread Operator with Objects
let obj1 = { name: "PW Skills", course: "Full stack web development" };
let obj2 = { rating: 5, reviews: 2000 };
let newObjCreated = { ...obj1, ...obj2 };
console.log(newObjCreated);
/*
OUTPUT:
{
name: 'PW Skills',
course: 'Full stack web development,
rating: 5,
reviews: 2000
}
*/

let obj3 = {
    name: "PW Skills",
    course: "Full stack web development",
    numberOfStudentsEnrolled: 1000,
    };
    let obj4 = { rating: 5, reviews: 2000, numberOfStudentsEnrolled: 2000 };
    let newObjCreated1 = { ...obj3, ...obj4 };
    console.log(newObjCreated);
    /*
    OUTPUT:
    {
    name: 'PW Skills',
    course: 'Full stack web development,
    numberOfStudentsEnrolled: 2000,
    rating: 5,
    reviews: 2000
    }
    */

/* IMPORTANT : If two or more objects being spread contain the same property key, the last property value will overwrite
the previous ones. /*

/************************************/


// Adding New Values

let arr = ["HTML", "CSS", "JS", "React", "Node"];
let newArr = [...arr, "Git"];
console.log(newArr);
// OUTPUT: [ 'HTML', 'CSS', 'JS', 'React', 'Node', 'Git' ]
let obj = { name: "PW Skills", course: "Full Stack Web Developer" };
let newObj = { ...obj, ratings: 5 };
console.log(newObj);
// OUTPUT: { name: 'PW Skills', course: 'Full Stack Web Developer', ratings: 5 }

/************************************/

//Rest Operator

/* The rest operator is used to collect all elements into an array. The representation is the same as a Spread
operator but used differently. The rest operator gathers elements into an array.*/

// Collecting all remaining parameters in a function.
function sumOfAllNumbers(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr);
    }
    console.log(sumOfAllNumbers(1, 2, 3, 4));



/***************************************/


// Destructuring
let arr3 = ["HTML", "CSS", "JS", "React", "Node", "Express", "Git"];
let [element1, element2, ...remainingElements] = arr3;
console.log(element1); // OUTPUT: HTML
console.log(element2); // OUTPUT: CSS
console.log(remainingElements);
// OUTPUT: [ 'JS', 'React', 'Node', 'Express', 'Git' ]
let obj7 = {
name: "PW Skills",
course: "Full Stack Web Development",
rating: 5,
};
let { name, ...remainingProperties } = obj7;
console.log(name); // OUTPUT: PW Skills
console.log(remainingProperties);
// OUTPUT: { course: 'Full Stack Web Development', rating: 5 }




