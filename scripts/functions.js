// -- ** Functions ** -- //

//Unexpected arguments might cause errors during function execution
function printLength(array) {
  console.log(array.length);
} // end printLength

//The following will cause a TypeError
//printLength(); // undefined argument

// -- Default Parameters -- //
let letters = ['A', 'B', 'C', 'D', 'E'];

//The lettersArray parameter will default to []
function logLetters(lettersArray = []) {
  console.log(lettersArray.length);
} // end logLetters

//does not break when invoked with no arguments
logLetters();

// -- Named Parameters -- //

/* Using named parameters for optional settings makes it easier
to understand how a function should be invoked */

//NOTE: the entire object below is defaulted to empty, allowing that parameter to be optional
function setPageThread(name, { popular, expires, activeClass } = {} ) { // Now we know which arguments are available
  console.log('Name:', name);
  console.log('Popular:', popular);
  console.log('Expires:', expires);
  console.log('Active:', activeClass);
} // end setPageThread

setPageThread('Coming Soon!',{
  popular: true,
  expires: 2017,
  activeClass: 'is-page-thread'
});

//It's ok to omit some options when invoking a function with named Parameters
setPageThread('Again!', {
  popular: false
});

//All arguments, however, should not be ommitted...
//... UNLESS its default is set
//The following would cause a TypeError
setPageThread('Error Incoming...');

// -- Rest Parameters -- //
//Used in function definitions.
// aka variatic functions (can accept any number of arguments)
// Rest parameter syntax begins with ellipsis
//NOTE: Rest parameters must always be the last parameter of the function

function displayTags(...tags) {
  // `...tags` is read as a regular array
  for (let i in tags) {
    let tag = tags[i];
    console.log(tag);
  } // end for
} // end displayTags

//This function can now be called with any number of arguments
displayTags('singular');
displayTags('songs', 'lyrics', 'bands');

// -- Spread Operator -- //
//Used in function invocation
//Use ellipsis syntax in the function invocation to split array into multiple arguments
let data = ['one', 'two', 'three', 'four'];
displayTags(...data);

// -- Arrow Functions -- //

// Anonymous functions passed as callbacks to other functions create their own scope...
// Arrow functions fix this bug.

//Using arrow functions to preserve scope:
