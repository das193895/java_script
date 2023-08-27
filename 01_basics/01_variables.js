const accountId = 121212;
let accountEmail = "das193895@gmail.com";
var accountPassword = "2345";
accountCity = "delhi";

let accountState; // hence there is no value is assigned to this variable then it's value is "undefined" for now;


// accountid = 2;   -----> not allowed because declared by the keyword "const";

console.log(accountId);

accountEmai = "am@gmail.com";
accountPassword = "6789";
accountCity = "bbsr";


/*
do not use the keyword "var" for feclaring the variables
because of issue in block scope and functional scope
*/

console.table([accountEmai,accountPassword,accountCity,accountState]);  // displays in the form of a table