// there are 2 types of datatypes based on "Storing data in the memmory and retriving from it". 1. PREMITIVE , 2. NON-PREMITIVE

// 1.premitive (call by value) : String,number,Boolean,null,undefined,symbol,BigInt

// 2.Non-premitive (call by referance) : Arrays,Objects,functions

const id = Symbol("123");       // Symbol is used for assigning unique values 
const anotherId = Symbol("123");

console.log(id == anotherId);  // false

// Remember the type of all types of Datatypes using "typeof" or read official documentation.