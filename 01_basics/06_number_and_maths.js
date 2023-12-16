console.log(400);   // 400

const num = new Number(400);
console.log(num);   // [Number: 400]

console.log(num.toString().length); // 3

console.log(num.toFixed(2)); // 400.00

const other_num = 567.8900;
console.log(other_num.toPrecision(2));  // 5.7e+2
console.log(other_num.toPrecision(3));  // 568
console.log(other_num.toPrecision(4));  //567.9

const n = 1000000;
console.log(n.toLocaleString("en-IN"))  // 10,00,000   (converts to Indian number system)

/************** MATHS ******************/

console.log(Math.abs(-4));  // 4
console.log(Math.round(4.6));  // 5
console.log(Math.ceil(4.2))  // 5
console.log(Math.floor(4.2));  // 4
console.log(Math.min(2,5,78,9));  // 2
console.log(Math.max(2,5,78,9));  // 78
console.log(Math.random());  // gives a random value between 0 and 1


// generating a random Integer between max and min

const max = 10;
const min = 20;

console.log(Math.floor(Math.random() * (max-min + 1)) + min)



