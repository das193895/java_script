let score = 33;
console.log(typeof(score));  // number

/*************************/

let scoree = "33";
let value_in_number = Number(scoree);  // converts to 33
console.log(typeof(value_in_number));    // number

/***********************/

let s = "33abc"; // a string
let value_in_number_s = Number(s);  // it actually gets converts to NaN
console.log(value_in_number_s) // NaN
console.log(typeof(value_in_number_s));    // number

/**************************** */

let sc = null;
let value_in_number_sc = Number(sc);  //  converts to zero
console.log(value_in_number_sc) // zero

/**********************************/

let bool = true;
let value_in_number_bool = Number(bool);
console.log(value_in_number_bool) // one  and zero in case of false

/**********************/

let num = 1;
let st = "";

let value_in_boolean_num = Boolean(num);  // converts to true
let value_in_boolean_st = Boolean(st);    // converts to false
let value_in_string_num = String(num);    // converts to a string

console.log(value_in_boolean_num);  // true and false if num = 0;
console.log(value_in_boolean_st);   // false in case of empty string otherwise true
console.log(typeof(value_in_string_num))  // string



/*********************/





