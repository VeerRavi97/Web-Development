
// this is a pointer that refers to the object for which 'this' function is called
//it represents an object that invokes a member function
console.log(this) // global or window is the global object of the browser (window.___)

const func=()=>{
    console.log('hello');
    console.log(this); // this refers to the window(global scope object in the browser)
    
    
}
function sayHi() {
    console.log("HI")
    //this refers to the window (global scope object in the browser)
    console.log(this);
  }
  
  
  const person = {
    first: 'Zig',
    last: 'Sharko',
    nickName: 'Zunk',
    fullName() {
      //In a method, this refers to the object the method "lives" in:
      const {    // const self=this;
        first,
        last,
        nickName
      } = this;  // object destructuring
      return `${first} ${last } AKA ${nickName}`;
    },
    printBio() {
      const fullName = this.fullName();
      console.log(`${fullName} is a person!`)
    }
  }