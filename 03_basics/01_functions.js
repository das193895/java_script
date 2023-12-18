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