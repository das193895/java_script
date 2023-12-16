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

