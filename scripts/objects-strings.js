console.log('objects-strings');

// -- ** Objects and Strings ** -- //

// -- Objects -- //

//OBJECT INITIALIZER SHORTHAND

//Example #1

let buildUser = function(first, last) {
  let fullName = first + ' ' + last;

  //NOTE: the following is WITHOUT object initializer shorthand
  // return {
  //   first: first,
  //   last: last,
  //   fullName: fullName
  // }; // end return

  //Object initializer shorthand
  return {first, last, fullName};

}; // end buildUser

let user = buildUser('Sam', 'Williams');
console.log(user);

//Example #2

let name = "Jaynie";
let age = 28;
let hobbies = ['running', 'coding', 'reading'];

let self = {name, age, hobbies};
console.log(self);

//OBJECT DESTRUCTURING

/* Not all properties have to be destructured all the time.
We can explicitly select the ones we want */

let { first, last, fullName } = buildUser('Gerry', 'Mandering');
console.log(first, last, fullName);

//ADDING A FUNCTION TO AN OBJECT

/* In a previous version of JavaScript, adding a function to an
object required specifying the property name and then the full
function definiton (including the function keyword) */
/* A new shorthand notation is availble for adding a method to an object
where the keyword function is no longer necessary */

let buildPet = function(first, last, postCount) {
  let fullName = first + ' ' + last;
  const ACTIVE_POST_COUNT = 10;
  return {
    first,
    last,
    fullName,
    // isActive: function() { //NOTE: this is 'old' syntax for the following line
    isActive() {
      return postCount >= ACTIVE_POST_COUNT;
    } // end isActive
  }; // end return
}; // end buildPet

//TEMPLATE STRINGS

let buildString = function(first, last) {
  let fullString = `${first} ${last}`;
  console.log(fullString);
}; // end buildString

let newString = buildString('Template', 'Strings');

//Multi-line strings
// Line breaks are preserved
let userName = 'Sam';
let admin = { fullName: 'Alex Williams' };
let veryLongString = `Hi ${userName}
This is very

very

very

long text.`;

console.log(veryLongString);

let headerText = 'still practicing...';
let htmlString = `<h1> ${headerText} </h1>`;
console.log(htmlString);

//OBJECT.assign
/* For functions that need to be used accross different applications,
it's ok to accept an options object instead of using named parameters
(too many named parameters makes functions hard to read)*/

function countdownTimer(targetElement, timeLeft, options = {}) {
  /* Some options may not be specified by the caller,
    so we need to have default values.
    One option is to do the following, which is messy and not maintainable... */
  // let container = options.container || '.timer-display';
  // let timeUnit = options.timeUnit || 'seconds';

  //This is a better way to do it using a local object:
  let defaults = {
    container: '.time-unit',
    timeUnit: 'seconds',
    clonedDataAttribute: 'cloned',
    timeoutClass: '.is-timeout',
    timeoutSoonClass: '.is-timeout',
    timeoutSoonTime: 10
  }; // end defaults

  /* Then we want to merge options and defaults, and all duplicate
     properties from options object must override defaults */
  //The first object in object.assign is modified, but the source objects remain the same.

   let settings = Object.assign({}, defaults, options);

   /* Preserving the original default values gives us the ability to compare
      them with the options passed and act accordingly when necessary */
    if ( settings.timeUnit !== defaults.timeUnit ) {
      _conversationFunction( timeLeft, settings.timeUnit );
    } // end if

}; // end countdownTimer
