// promise is an object in java script and we can create s new instance of the object by using "new" keyword

/*************************************************/

// creating a promise
const promise_one = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls

    setTimeout(function(){

        console.log("async task is complete");
        resolve();

    },1000)
})

// consuming promises

promise_one.then(function(){
    console.log("promise is consumed");
})

// another syntax

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async 2 task is complete");
        resolve();
    },1000)
}).then(function(){
    console.log("async 2 is consumed");
})


/**********************************************************************/


const promise_three = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            user:"Amlan",
            email:"das@gmail.com"    // passing an object as a parameter
        });
    },1000);

})

promise_three.then(function(obj){   // we can access all the data from the promise creation
    console.log(obj);
})


/**********************************************************************/

const promise_four = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        // let error = false;

        if(!error){
            resolve({username:"AD",password:123});
        }
        else{
            reject("Error:Something went wrong")
        }
    },1000)
})

promise_four.then(function(user){  // here user = {username:"AD",password:123} 
    console.log(user);
    return user.username;
}).then(function(username){     // here username = user.username
    return username;
}).catch(function(error){      // "catch" for 
    console.log(error);
}).finally(function(){
    console.log("the promise is either resolved or rejected");
})


/*******************************************************/


const promise_five = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        // let error = false;

        if(!error){
            resolve({username:"AD",password:123});
        }
        else{
            reject("Error:Something went wrong")
        }
    },1000)
})

async function consume_promise_five(){            // Insstead of using ".then and .catch" we can use async await with try-catch
    try {
        const response = await(promise_five);
        console.log(response);
    } catch (error) {
        console.log(error); 
    }

}

consume_promise_five();


/***************************************************************/

// Fetching data from an url

// BY async-await

async function fetch_url(){
    try {
        const response = await fetch("https://api.github.com/users/hiteshchoudhary");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error); 
    }
}

fetch_url();



// By .then and .catch

fetch("https://api.github.com/users/hiteshchoudhary")
.then((obj) => {
    return obj.json;
})
.then((req)=>{
    console.log(req);
})
.catch((error) => {
    console.log(error);
})
