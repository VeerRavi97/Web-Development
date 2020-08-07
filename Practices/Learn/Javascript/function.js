// same as function in c++ except function keyword(starts with)

function test(x,y) {
    return y - x;
  }
  
const sub=test(10,40) ; 
console.log(sub);

//local vs global scope
// function scope : limited to function in which it is declared
//block scope: limited to block in which it is declared
// let vs var
// var is function scoped while let is block scoped
var a="world"; // global scope

function foo(){
    var a="hello";
    if(true) {
        console.log(a);
    }
    for(var i=0;i<5;i++) console.log(i);
    console.log(i+20);
}
foo();
console.log(a);

// a variable can be used before it is declared (variable hoisting)
console.log(yes)
var yes="no"
// var yes;
//console.log(yes) // undefined
// yes="no"

console.log(add(4,5)); // we can call a function before it is defined
// when javascript engine executes the code it moves all function declaration to the top

//hoisting is the process of moving function declarations to the top of the file.
// This is done automatically by javascript engine


// Function definition
function add(x, y) {
    return x + y;
  }
 
  console.log(add(4,5));

  
  // Function Expression (Anonymous)
  const sum = function (x, y) {
    return x + y;
  }
  
  // Function Expression (Named)
  const product = function multiply(x, y) {
    return x * y;
  }


