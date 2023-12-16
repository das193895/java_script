// (1 > 2) , (1 >= 2) , (1==2) , (1<2) , (1<=2) , (1!=2)

console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0)   // true   

// the uncertainity because ..... the "=="  and  "<,>,<=,>=" operators work differently . For the first case null converts to 0 so for the first case the result is false . But in third case 0 >= 0 is a true statement so the result is true.

// difference between == and ===

// == only check the value but === checks both value and data type.

console.log("2" == 2);
console.log("2" === 2 );   