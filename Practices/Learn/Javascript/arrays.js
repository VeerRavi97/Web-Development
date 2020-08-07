// let arr=[1,2,3]
// let shoppingList=["shirts","jeans","T-Shirt"]
// console.log(shoppingList)

// let info=["Veer",22,false]
// console.log(info.length)

// Array methods
//let fruits = ['Apple', 'Banana']
//let first = fruits[0]
// Apple

//let last = fruits[fruits.length - 1]
// Banana

//fruits.push('Orange')
//console.log(fruits)

// let arr=[]
// let i=0;
// for(i=1;i<5;i++)
// arr.push(5)
// console.log(arr)

// let last = fruits.pop() // remove Orange (from the end)
// console.log(fruits)


// let first = fruits.shift() // remove Apple from the front
//  ["Banana"]


// let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]   
// Remember: Pushun and posh

let fruits = [ 'apple', 'banana' ];
let veggies = [ 'asparagus', 'brussel sprouts' ];
let meats = [ 'steak', 'chicken breast' ];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

let allFoods = fruits.concat(veggies, meats);



const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false


const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

console.log(beasts.lastIndexOf('bison'));

const array2 = ['one', 'two', 'three'];
console.log('array1:', array2);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array2.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array2);
// expected output: "array1:" Array ["three", "two", "one"]


const array3 = [1, 2, 3, 4];

console.log(array3.fill(-1));
// expected output: [-1, -1, -1, -1]


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

//The original array will not be modified.

console.log(animals.slice(-2)); // last 2 values

let animals1 = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];

//splice(startIdx, deleteCount, itemsToInsert);

// =====================
// INSERTING w/ SPLICE
// =====================
// 'at index 1, delete 0 items and insert "octopus"'
animals1.splice(1, 0, 'octopus');
//["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]

// =====================
// DELETING w/ SPLICE
// =====================
//'at index 5, delete 2 items'
animals1.splice(5, 2);
//["shark", "octopus", "salmon", "whale", "bear"]

// =====================
// REPLACING w/ SPLICE
// =====================
//'at index 3, delete 2 items and replace them with "orca" and "grizzly"'
animals1.splice(3, 2, 'orca', 'grizzly');
// ["shark", "octopus", "salmon", "orca", "grizzly"]


//using const with arrays. values can change as long as the reference remains the same
const arr=["DeeDee","Marky","Joey"]
arr.push("Sharko");
//arr=["Oggy"] assignment to constant variable
console.log(arr)
