// for of loop

const arr = [1,2,3,4,5];

for (const i of arr) {
    console.log(i);
    
}

const str = "hello";

for (const s of str) {
    console.log(s);
    
}

// maps

const map = new map();   // stores key value pairs and remembers the order of insertion and not stores any duplicate value

map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


// Objects are not iterable with for of loop.

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }