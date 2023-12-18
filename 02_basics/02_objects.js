// object literals 


const mySym = Symbol("red");

const Jsuser = {             //  non singleton object
    name:'Amlan',
    age:20,
    [mySym]:"hfggfgf",       // using Symbol  // Important
    location:"Delhi",
    email:"abcd@gmail.com",
    isLoggedIn:false,
    lastLoggedInDays:["friday","Saturday"]

}

console.log(Jsuser.email);

console.log(Jsuser["email"],Jsuser["name"],Jsuser["age"],Jsuser["location"]); // accessing keys
console.log(Jsuser[mySym]);

// Jsuser["email"] = "ghgg@gmail.com";  // we can change like this

// Object.freeze(Jsuser);  // we can not make changes in "Jsuser" after it

Jsuser.greeting = function(){
    console.log("Hello user!")
}

Jsuser.greetingTwo = function(){
    console.log(`Hello user! and namaste ${this.name}`)   // we can use any attribute of Jsuser object by this
}


console.log(Jsuser)


console.log(Jsuser.greeting);  // [Function (anonymous)]   ----> the function is not executed yet
console.log(Jsuser.greeting()); // Hello user!  ----> now the function is already executed


/***************************************/

// const tinderObject = new Object();   // A singleton object

const tinderUser = {};

tinderUser.name = "sam";
tinderUser.location = "Delhi";
tinderUser.email = "jjfdhdfh@gmail.com";
tinderUser.isLoggedIn = false;

console.log(tinderUser);


const regularUser = {
    email:"gjffj@gmail.com",
    fullname: {
        userfullname:{
            firstname:'Amlan',
            lastname:"Das"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)   // Amlan

// joining multiple objects into one
console.log(Object.assign({},Jsuser,tinderUser,regularUser));
console.log({...Jsuser,...tinderUser,...regularUser});   // using spread operator


console.log(Object.keys(tinderUser));  // [ 'name', 'location', 'email', 'isLoggedIn' ]  ---> array of keys
console.log(Object.values(tinderUser)); // [ 'sam', 'Delhi', 'jjfdhdfh@gmail.com', false ]  ---> array of values
console.log(Object.entries(tinderUser));  // [ [ 'name', 'sam' ],[ 'location', 'Delhi' ],[ 'email', 'jjfdhdfh@gmail.com' ],[ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLogged")); // false
console.log(tinderUser.hasOwnProperty("isLoggedIn"));  // True

/**************************************/

// destructuring of objects

const course = {
    name:"jrjrjjy",
    price:"456",
    duration:"1month"
}

const {price : p} = course;

console.log(p);



