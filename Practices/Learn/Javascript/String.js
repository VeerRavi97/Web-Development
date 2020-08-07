// let name="Zig Sharko";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase())

// let name="Zig"
// name.length

//Strings are immutable – they cannot change, we can only ever make new strings.


// String Methods
// let greeting="     hello      ";
// let greeting2=greeting.trim();
// console.log(greeting2);


// let show="oggyandcoakroaches";
// let ch=show.indexOf("an"); // returns index and -1 if not found
// console.log(ch);

// let newshow=show.slice(0,4); // (start,end]
// console.log(newshow);
// console.log("\n");

// let obsessed=show.replace("oggy","sharko");
// console.log(obsessed);



// String template literals

let a=10
let b=20
let total=`the sum of a and b is ${a+b}`; // BackTick
let total1 ="the sum of a and b is "+(a+b)+"!yeah";
console.log(total1)