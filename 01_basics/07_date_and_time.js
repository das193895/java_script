
let my_date = new Date();
console.log(typeof(my_date)); // object
console.log(my_date);  // 2023-12-16T14:22:19.347Z
console.log(my_date.toString());  // Sat Dec 16 2023 14:23:14 GMT+0000 (Coordinated Universal Time)
console.log(my_date.toDateString());  // Sat Dec 16 2023
console.log(my_date.toLocaleString());  // 12/16/2023, 2:24:42 PM
console.log(my_date.toDateString());  // Sat Dec 16 2023
console.log(my_date.toLocaleDateString());  // 12/16/2023
// console.log(my_date.toJSON());
console.log(my_date.getTime());
console.log(my_date.getMonth());  // 11
console.log(my_date.getDay()); // 6

my_date.toLocaleString('default', {
    weekday:'long'
})

let my_created_date = new Date(2023, 0, 23);
console.log(my_created_date.toLocaleDateString());  // 1/23/2023

let my_created_date_new = new Date("01-14-2023");
console.log(my_created_date.toLocaleDateString());  // 1/23/2023


let my_time_stamp = Date.now();
console.log(my_time_stamp); // time in miliseconds from 1st jan 1970 till todays date
console.log(my_created_date.getTime()); // converts the given date to miliseconds with respect to 1st jan 1970

console.log(Math.floor(Date.now()/1000));  // in seconds

