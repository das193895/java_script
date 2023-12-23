const user = {
    username:"SB",
    price:999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

   
}

// user.welcomemessage();  // SB , welcome to website  and the object "user"
// user.username = "sam";
// user.welcomemessage();   // sam , welcome to website  and the object "user"

console.log(this); // {}  but if you run this in browser then it will give the "window" object as output


/*****************************/
  

const addtwo = (num1,num2) => {   // arrow function   (Explicit return)
    return num1+num2
}

const addhree = (num1,num2) => (num1+num2);  // arrow function  (Implicit return)

const return_object = () => ({username:"SB"})  // returning an object