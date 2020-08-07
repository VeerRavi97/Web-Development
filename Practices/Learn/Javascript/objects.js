// objects are collection of properties. Properties are key value pairs
// property=key+value
// objects are dictionaries in python and maps in c++
var person={
    name:"Veer",
    age:20,
    company:"Samsung",
    "full name":"Veer Ravi"
};

// Retrieving data
// bracket notation, similar to arrays
console.log(person["full name"]) // person.full name won't work
console.log(person.name)

// updating data
person["name"]="Ravi"
console.log(person)
console.log(typeof person)

let boy={} // empty object
boy.name="Zig"
console.log(boy)

let numbers={
    100:"One Hundred",
    1:"One",
    name:"Zig"
}
//keys are converted to strings, 100 is converted to "100"
console.log(numbers["100"])
// console.log(numbers.100); error 100 can't be variable but can be a property of object

let fullname='full name'
console.log(person[fullname])

const users={};
users.username='DeeDee' // adding
users["username"]="Joey"  // updating
console.log(users)


// Adding methods to an object!
const math = {
    numbers: [1, 2, 3, 4, 5],
    add: function (x, y) {
      return x + y;
    },
    multiply: function (x, y) {
      return x * y;
    }
  }

  math.divide=function(x,y){
    return x/y;
  }
  
  // To execute multiply:
  math.multiply(5, 9); //45

  const auth = {
    username: 'TommyBot',
    login() {
      console.log("LOGGED YOU IN!")
    },
    logout() {
      console.log("GOODBYE")
    }
  }
  console.log(auth.login());
  
  


  