// indexOf and includes won't work for reference types
// find works with both primitive as well as reference types
// returns the value of the first element  in the array that
//satisfies the provided testing function
const users=[
    {
        username:"Veer",
        age:20
    },
    {
        username:"Ravi",
        age:22
    }
];

const user=users.find(user=>{
    return user.username==="Veer";
})
const userIndex=users.findIndex(user=>{
    return user.username==="VeerR";
})
console.log(userIndex);

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
  ]
  
  // Find first movie that includes 'Mrs' in its title:
  const movie = movies.find(movie => {
    return movie.includes('Mrs');
  })
  
  //Find first movie that begins with 'Mrs':
  const movie2 = movies.find(m => m.indexOf("Mrs") === 0);
  
  const books = [{
      title: 'Good Omens',
      authors: ['Terry Pratchett', 'Neil Gaiman'],
      rating: 4.25
    },
    {
      title: 'Bone: The Complete Edition',
      authors: ['Jeff Smith'],
      rating: 4.42
    },
    {
      title: 'American Gods',
      authors: ['Neil Gaiman'],
      rating: 4.11
    },
    {
      title: 'A Gentleman in Moscow',
      authors: ['Amor Towles'],
      rating: 4.36
    }
  ]
  //Find first book w/ rating over 4.3
  const goodBook = books.find(b => b.rating >= 4.3); // implicit return
  
  //Find first book with Neil Gaiman as an author:
  const neilBook = books.find(b => (
    b.authors.includes('Neil Gaiman')
  ))
