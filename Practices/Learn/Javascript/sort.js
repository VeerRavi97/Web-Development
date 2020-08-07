const nums=[12,25,100,34,111111111];
//nums.sort();
//console.log(nums);

//By default, the sort() method sorts the values as strings in alphabetical and ascending order.

//This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

//Because of this, the sort() method will produce an incorrect result when sorting numbers.

//You can fix this by providing a "compare function" (See "Parameter Values" below).

const comp=(a,b)=>{
    if(a<b) return 1;
    if(a>b) return -1;
    if(a===b) return 0;
}
// 
nums.sort(comp);
console.log(nums);
