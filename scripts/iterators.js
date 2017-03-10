// -- ** ITERATORS ** -- //

//Arrays are iterable objects, which means we can use them with `for...of`
let names = ['Sam', 'Joe', 'Brian'];
for (let name of names) {
  console.log(name);
} // end for

//Plain JavaScript objects are not iterable, so they do not work with `for...of` out of the box
//ITERATOR Objects

let posts = {
  title: 'New features in JS',
  replies: 19
}; // end post

//Call the symbol.iterator method
posts[Symbol.iterator] = function() {

  let properties = Object.keys(this); //Returns an array with property names
  let count = 0; //Allows us to access the properites array by index
  let isDone = false; //Will be set to `true` when we are done with the loop

  //calling Symbol.iterator returns next property
  let next = () => {
    if ( count >= properties.length ){
      isDone = true;
    }
    //this refers to the post object
    //++ only increments count after it's read
    return { done: isDone, value: this[properties[count++]] };
  }; // end next

  return { next };

}; // end post

//Run iteration on the object
for (let p of posts) {
  console.log(p);
}

//Using iterable objects with spread operator
let values = [...posts]; //groups property values and return an array
console.log(values);

//Iterables with destructuring
let [ title, replies ] = posts;
console.log( title );
console.log( replies );
