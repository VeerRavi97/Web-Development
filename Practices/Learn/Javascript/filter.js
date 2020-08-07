const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

const numbers=[1,-2,4,12]
const nums=numbers.filter(num=> num>0); 
// if the element matches the testing function, it returns that element not return value

console.log(nums);
