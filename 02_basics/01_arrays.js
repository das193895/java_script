const myarray = [1,2,3,4,5,true,"hfjfh"];  // zero based indexing

const myarr = ["jjhjj","gjfjfj"];

let arr = new Array(1,2,3,4,5);

console.log(arr[0]);

// arrays in java script are resizable in nature and can have mixed data types .
// copy operations in arrays always create a shallow copy(referances are same) . 


// Array methods

myarray.push(6); // adds the element at last
myarray.pop(); // removes the last element
myarray.unshift(7); //  adds the element at fast
myarray.shift(); // removes the fast element
console.log(myarray.includes(4)); // true
console.log(myarray.indexOf(6)); // -1 because 6 is not belonging to the array
console.log(myarray.join());  // 1,2,3,4,5,true,hfjfh  ---> it is a string
console.log(myarray,myarray.slice(1,4));   // [1,2,3,4,5,true,"hfjfh"] and [2,3,4] 
console.log(myarray,myarray.splice(1,4));  // [ 1, true, 'hfjfh' ] and [2,3,4,5]  --- > it changes the original array as well 

// console.log(myarray)


const arr1 = [1,2,3,4];
const arr2 = [6,7,8,9];

let new_arr3 = arr1.concat(arr2);
console.log(new_arr3);  // [1,2,3,4,5,6,7,8,9]

console.log([...arr1,...arr2]);   // [1,2,3,4,5,6,7,8,9]  (spread )

console.log([1,2,3,[456,89,0],9,35,[45,92,[98,10,492]]].flat(Infinity));    //[1,  2,  3, 456, 89,  0, 9, 35, 45,  92, 98, 10,49]

console.log(Array.isArray("hgdhgh")); //false

console.log(Array.from("ghfgnffn"));  // ['g', 'h', 'f', 'g', 'n', 'f','f', 'n']

console.log(Array.from({name:"hhgdhd"}));  // interesting  , []

console.log(Array.of(100,200,300));  // [ 100, 200, 300 ]

