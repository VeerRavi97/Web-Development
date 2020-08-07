//destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables.
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2
const[p,,q]=x;
console.log(p,q);

let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1




const o = {p: 42, q: true}; 
const {p, q} = o;  // existing key name

console.log(p); // 42
console.log(q); // true 

const o = {p: 42, q: true};
const {p: foo, q: bar} = o; // renamed key name
 
console.log(foo); // 42 
console.log(bar); // true

let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10 
b; // 20 
rest; // { c: 30, d: 40 }



function f() {
  return [1, 2];
}

let a, b; 
[a, b] = f(); 
console.log(a); // 1
console.log(b); // 2

function f() {
  return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3


//destructuring parameters 

const func=({first,second})=>{

return ["one","two"];
};

const obj={a:1,b:2,c:3,d:4}
const[ones,twos]=func(obj);
console.log(ones,twos);


//Combined Array and Object Destructuring
const props = [
  { id: 1, name: 'Fizz'},
  { id: 2, name: 'Buzz'},
  { id: 3, name: 'FizzBuzz'}
];

const [,, { name }] = props;

console.log(name); // "FizzBuzz"