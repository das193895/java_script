function add(num1, num2){   // a function
    return num1 + num2
}

const a = add(2,6);
console.log(a)

function message(username){
    return `${username} just logged in`
}

console.log(message("SB"));  // SB just logged in

console.log(message());  //  undefined just logged in


function message_up(username){
    if(username === undefined){
        console.log("please enter a username");
    }
    else{
        return `${username} just logged in`
    }
}

/****************************/

function shoppingCart(...num){
    return num;
}

console.log(shoppingCart(200,400,700,1000,900)); // [ 200, 400, 700, 1000, 900 ]

function shoppingCartu(num1,num2,...num){
    return num;
}

console.log(shoppingCartu(200,400,700,1000,900)); // [ 700, 1000, 900 ]

/****************************/

function obj(anyobject){   // anyobject refers to we are going to pass an object as an argumment

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

}

obj({
    username:"SB",
    price:456
})

/****************************/


console.log(addone(5)); // It will execute

function addone(num){
    return num+1;
}


// console.log(addtwo(5));  // it will not execute and will give an error
const addtwo = function(num){
    return num+2;
}

console.log(addtwo(5));
