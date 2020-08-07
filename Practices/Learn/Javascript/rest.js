// rest of the parameter we use
// collect all remaining arguments in to array
// OLD WAY!
// function sum() {
//   const argsArr = [...arguments]
//   return argsArr.reduce((total, currVal) => {
//     return total + currVal
//   })
// }
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10
  

// New way using rest:
function sum(...nums) {
    return nums.reduce((total, currVal) => {
      return total + currVal
    })
  }
  
  //We can have named params and then collect the rest into an array:
  function fullName(first, last, ...titles) {
    console.log('first', first)
    console.log('last', last)
    console.log('titles', titles)
  }
  
  // We can use rest parameters in arrow functions!
  const multiply = (...nums) => (
    nums.reduce((total, currVal) => total * currVal)
  )