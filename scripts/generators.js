// -- ** ITERATORS ** -- //
function *nameList() {
  yield "Sam"; // { done: false, value: 'Sam' }
  yield "Taylor"; // { done:false, value: 'Tyler' }
}

//calling the function returns a generator object
for (let name of nameList()) {
  console.log( name );
}

let namesArray = [...nameList()]; //creates an array of name values
console.log( namesArray );

//Refactored generator object (from iterator object)
let zingbats = { title: 'New JS Features', replies: 22 };
zingbats[Symbol.iterator] = function*() {
  let props = Object.key(this);
  for  (let p of props) {
    yield this[p];
  } // end for
}; // end post

let zings = [...posts];
console.log(zings);
