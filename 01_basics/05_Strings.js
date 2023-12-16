const name = "Amlan";  // a String 

const aname = new String("Amlan");

console.log(typeof(name));  // String 
console.log(typeof(aname)); // Object (key value pairs)  in which every index number is a key and every letter is a value.
/**
 * {0:A,
 * 1:m,
 * 2:l,
 * 3:a,
 * 4:n}
 */

console.log(aname[0]); // A

console.log(aname.length); // 5

console.log(aname.toUpperCase()) // AMLAN

console.log(aname.toLowerCase())  // amlan

console.log(aname.charAt(2))  // l

console.log(aname.indexOf('n'))  // 4

console.log(aname.substring(0,4))   // 0 to 3 ---> Amla

console.log(aname.slice(-5,-2))

let new_name = "   String   ";
console.log(new_name.trim(new_name))  // removes spaces

let url = "https://hitesh.com/hitesh%2choudhary.com";
console.log(url.replace("%2","tyu"))   // https://hitesh.com/hiteshtyuchoudhary.com

let nota = "hghg_hfgjfdjfj_hfgjdfj_ghfnfn";
console.log(nota.split("_"));     //  [ 'hghg', 'hfgjfdjfj', 'hfgjdfj', 'ghfnfn' ]


/************************/

let my_name = "Amlan";

let repo_count = 50;

console.log(`my name is ${my_name} and my repo count is ${repo_count}`)  // placeholders
