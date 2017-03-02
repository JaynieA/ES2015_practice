// -- ** Arrays ** -- //

// -- ARRAY DESTRUCTURING -- //
let books = ['To Kill a Mockingbird', 'Catcher in the Rye', 'The Great Gatsby' ];
let [a, b, c] = books;
console.log(a, b, c);

//Values can be discarded:
let tauWomen = ['Karla', 'Akilah', 'Jaynie', 'Sherrie', 'Callie'];
let [one, , two, three, four] = tauWomen;
console.log(one, two, three, four);

//We can combine destructuring with rest parameters to group values into other arrays-maps-sets
let moreTau = ['Jimmy', 'Andy', 'Deforis', 'Tony'];
let [firstName, ...rest] = moreTau;
console.log(firstName, rest);

//When returning arrays from functions, we can assign to multiple variables at once
function activeUsers() {
  let users = ['Jaynie', 'Brent', 'Reggie', 'Willie'];
  return users;
} // end activeUsers

let [aa, bb, cc, dd] = activeUsers();
console.log(aa, bb, cc, dd);

// -- FOR...OF STATEMENT -- //
let animals = ['dog', 'rat', 'cheeta', 'elephant'];

//previously with for...in loop:
for (let i in animals) {
  console.log(animals[i]);
} // end for

//now with a for...of loop:
for (let name of animals) {
  console.log(name);
} // end for

//Objects that work with for...of

console.log('Type of names array-->', typeof animals[Symbol.iterator] ); //type is `function` for the array

//The following will not work with for...of

let post = {
  author: 'Sam',
  replies: 10,
  lastReplyFrom: 'Julie'
}; // end post

//Because typeof Symbol.iterator is undefined
console.log('Type of post Object-->', typeof post[Symbol.iterator] ); //type is `undefined`

// -- ARRAY.FIND -- //

/* Returns the first element in an array that satisfies
   a provided testing function */
   
let peeps = [
  { name: 'Brooke', admin: false },
  { name: 'Annie', admin: true },
  { name: 'Mollie', admin: true }
]; // end peeps

let firstAdmin = peeps.find( (peep) => peep.admin ); // showing short syntax to return peep.admin
console.log(firstAdmin);
