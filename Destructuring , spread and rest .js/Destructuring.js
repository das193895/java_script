// Array Destructuring

// Destructuring Assignment
let [var1, var2] = ["value1", "value2"];
console.log(var1); // value1
console.log(var2); // value2

/*********************************/

// Array Destructuring for Random accessing.
let techStack = [
    "HTML",
    "Express",
    "React",
    "CSS",
    "Javascript",
    "Git",
    "Node",
    ];
    let [techStack0, , , techStack3, techStack4] = techStack;
    console.log(techStack0); // HTML
    console.log(techStack3); // CSS
    console.log(techStack4); // Javascript

/************************************************************/

// Destructuring array with default values.

    /*Sometimes, during Destructuring of an array if the value is not specified or the value is undefined the variable
    stored is undefined which is not expected. To avoid this we use default values.
    
    Var1 stores undefined as no value is passed to it. To avoid this we use the default values.
    
    We can also use Destructuring syntax to swap array values.*/

    let var3, var4;
    [var3, var4] = [, "NewValue"];
    console.log(var3); // undefined
    console.log(var4); // NewValue
    
    // Destructuring array with default values.
    let var5, var6;
    [var5 = "defaultValue1", var6 = "defaultValue2"] = [, "NewValue"];
    console.log(var5); // defaultValue1
    console.log(var6); // NewValue
    
    // Destructuring syntax to swap array values.
    let var7 = "value1", var8 = "value2";
    [var7, var8] = [var8, var7];
    console.log(var7); // value2
    console.log(var8); // value1

/************************************************************/

// Destructuring during iteration

// E-commerce site products and their prices.
let productDetails = [
    ["Charger", 500],
    ["HDMI cable", 200],
    ["Mobile Phone", 30000],
    ["Laptop", 90000],
    ["Monitor", 10000],
    ];
    // Print all the items along with their prices.
    for ([productName, price] of productDetails) {
    console.log(`The product ${productName} is priced at Rs.${price}`);
    }
    /*
    OUTPUT:
    The product Charger is priced at Rs.500
    The product HDMI cable is priced at Rs.200
    The product Mobile Phone is priced at Rs.30000
    The product Laptop is priced at Rs.90000
    The product Monitor is priced at Rs.10000
    */

// Student Registry
let studentDetails = [
    { name: "Mithun", registrationNumber: "PW6090", numberOfCoursesEnrolled: 5 },
    { name: "Alka", registrationNumber: "PW6091", numberOfCoursesEnrolled: 2 },
    { name: "Prabir", registrationNumber: "PW6092", numberOfCoursesEnrolled: 3 },
    { name: "Shivam", registrationNumber: "PW6093", numberOfCoursesEnrolled: 9 },
    { name: "Vinay", registrationNumber: "PW6094", numberOfCoursesEnrolled: 2 },
    ];
    // Print student name and the number of courses enrolled
    for ({ name, numberOfCoursesEnrolled } of studentDetails) {
    console.log(`The student ${name} has enrolled to ${numberOfCoursesEnrolled}
    courses at PW`);
    }
    /*
    OUTPUT:
    The student Mithun has enrolled to 5 courses at PW
    The student Alka has enrolled to 2 courses at PW
    The student Prabir has enrolled to 3 courses at PW
    The student Shivam has enrolled to 9 courses at PW
    The student Vinay has enrolled to 2 courses at PW
    */

/************************************************************/

// Destructuring objects during iteration

let studentDetails1 = {
    name: "Mithun",
    course: "Full Stack Web Development",
    email: "mithun@pw.live",
    dashboardAccessGiven: true,
    };
    let keyValuePairs = Object.entries(studentDetails1);
    console.log(keyValuePairs);
    /*
    OUTPUT:
    [
    [ 'name', 'Mithun' ],
    [ 'course', 'Full Stack Web Development’ ],
    [ 'email', 'mithun@pw.live' ],
    [ 'dashboardAccessGiven', true ]
    ]
    */


// studentDetails object
let studentDetails2 = {
    student1: {
    name: "Mithun",
    course: "Full Stack Web Development",
    email: "mithun@pw.live",
    dashboardAccessGiven: true,
    },
    student2: {
    name: "Prabir",
    course: "Full Stack Web Development",
    email: "prabir@pw.live",
    dashboardAccessGiven: true,
    },
    student3: {
    name: "Alka",
    course: "Full Stack Web Development",
    email: "alka@pw.live",
    dashboardAccessGiven: false,
    },
    };
    for (let [key, { name, course }] of Object.entries(studentDetails2)) {
    console.log(`${key} : ${name} is enrolled to ${course}`);
    }
    /*
    OUTPUT:
    student1 : Mithun is enrolled to Full Stack Web Development.
    student2 : Prabir is enrolled to Full Stack Web Development.
    student3 : Alka is enrolled to Full Stack Web Development.
    */

/************************************************************/

let student = {
    name: "Mithun S",
    course: "Full Stack Web Development",
    dashboardAccessGiven: true,
    };
    // Destructuring Object
    let { name, course, dashboardAccessGiven } = student;
    console.log(name);
    console.log(course);
    console.log(dashboardAccessGiven);
    /*
    OUTPUT:
    Mithun S
    Full Stack Web Development
    true
    */


    let student1 = {
        name1: "Mithun S",
        course1: "Full Stack Web Development",
        dashboardAccessGiven1: true,
        };
        // Random Accessing the properties: name & dashboardAccessGiven during destructuring.
        let { name1, dashboardAccessGiven1 } = student1;
        console.log(name);
        console.log(dashboardAccessGiven);
        /*
        OUTPUT:
        Mithun S
        true
        */

    // with default values


    let student2 = {
        name2: "Mithun S",
        course2: undefined,
        dashboardAccessGiven2: true,
        };
        let {
        name2, dashboardAccessGiven2,
        course2 = "Full Stack Web Development",
        } = student2;
        console.log(name);
        console.log(course);
        console.log(dashboardAccessGiven);
        /*
        OUTPUT:
        Mithun S
        Full Stack Web Development
        true
        */

/****************************************************************/

