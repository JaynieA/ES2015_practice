console.log('app.js sourced');

// ** -- Variable Declarations -- ** //

// -- Declarations with var -- //
var petsArray = ['Reggie', 'Willie', 'Hector'];
var loadPetNames = function(petsArray) {
  if (petsArray.length > 2) {
    var loadingMessage = 'Wait for it...';
    console.log('1.', flashMessage); //undefined (out of scope)
  } else {
    var flashMessage = "Loading";
    console.log('2.', flashMessage);
  } // end else
  console.log('3.', flashMessage); //undefined (out of scope)
}; // end loadPetNames
loadPetNames(petsArray);

// -- Declarations with let -- //
var printChoreName = function(first, second) {
  console.log(first);
}; // end printChoreName

var choresArray = ['Dust', 'Vacuum', 'Sweep'];
var loadChoreNames = function(choresArray) {
  if (choresArray.length > 2) {
    let loadingMessage = 'Wait for it...';
    console.log('1.', flashMessage); //ReferenceError
  } else {
    let flashMessage = "Loading";
    console.log('2.', flashMessage);
  } // end else
  console.log('3.', flashMessage); //ReferenceError
}; // end loadChoreNames
//loadChoreNames(choresArray);

/* Variables declared with `let` can be redefined,
but cannot be redeclared within the same scope */
let myName = 'Jaynie';
myName = 'Jayne'; // redefinition is allowed

let currentDay = "Monday";
//Below will cause a TypeError
//let currentDay = 'Tuesday';

// -- Declarations with const -- //
let users = ['Flash', 'Spiderman', '']
const MAX_USERS = 3;

/* The following would either cause a TypeError,
or silently fail depending on the JavaScript engine */
//MAX_USERS = 5;

if (users.length > MAX_USERS) {
  console.log('too many users');
}
