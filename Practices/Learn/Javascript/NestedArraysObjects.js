

// Array in objects
const student = {
	firstName : 'David',
	lastName  : 'Jones',
	strengths : [ 'Music', 'Art' ],
	exams     : {
		midterm : 92,
		final   : 88
	}
};

const avg = (student.exams.midterm + student.exams.final) / 2;
console.log(student.strengths[1]);
// array of objects
const shoppingCart = [
	{
		product  : 'Jenga Classic',
		price    : 6.88,
		quantity : 1
	},
	{
		product  : 'Echo Dot',
		price    : 29.99,
		quantity : 3
	},
	{
		product  : 'Fire Stick',
		price    : 39.99,
		quantity : 2
	}
];

console.log(shoppingCart[1].price);

var posts=[
{
    title:"Xilam TV",
    show:"Oggy and Coakroaches",
    actor:["DeeDee","OGGY","Jack"]
},
{
    title:"Nick",
    show:"Zig&Sharko",
    actor:["Zig","Sharko"]
}


]

console.log(posts[0].actor[2])