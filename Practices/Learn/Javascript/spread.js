// 3 dots - spread
// used on arrays to separate each value out

const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];

//  Append all items from arr2 onto arr1
arr3 = arr1.concat(arr2)
arr4 = [...arr1, ...arr2]; 

const copy=arr1.slice()
const copied=[...arr1]
console.log(copy,copied)

// expands an iterable (array, string...) into a list of arguments
const nums=[3,4,5,1232,1233]
const maxm=Math.max(...nums) // with spread
const maxm2=Math.max(nums) // NaN
console.log(maxm);

maxm1=Math.max(3,4,5,1232,1233) // without spread
console.log(maxm1)

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 21, 3];
  
  console.log(sum(...numbers));

  function giveMeFour(a, b, c, d) {
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)
  }
  
  const colors = ['red', 'orange', 'yellow', 'green']
  
  // Without spread:
  giveMeFour(colors);
  // a ["red", "orange", "yellow", "green"]
  // b undefined
  // c undefined
  // d undefined
  
  // WITH SPREAD!!!
  // Values are passed as separate args:
  giveMeFour(...colors);
  // a 'red'
  // b 'orange'
  // c 'yellow'
  // d 'green'
  
  //We can also spread strings!
  giveMeFour(...'GOAT');
  // a G
  // b O
  // c A
  // d T


  const feline = {
    legs: 4,
    family: 'Felidae'
  };
  
  const canine = {
    family: 'Caninae',
    furry: true,
    legs: 4
  };
  
  const dog = {
    ...canine,
    isPet: true,
    adorable: true
  }
  //{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}
  
  const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
  }
  //{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}
  
  const catDog = {
    ...canine,
    ...feline
  }
  //{family: "Felidae", furry: true, legs: 4}
  
  //Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
  const tripod = {
    ...canine,
    legs: 3,
  }
  //{family: "Caninae", furry: true, legs: 3}
  
  const catDogClone = {
    ...catDog
  }
  
