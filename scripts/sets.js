// -- ** Sets ** -- //

// Arrays don't enforce uniqueness of items- duplicate entries are allowed.
let someTags = [];
someTags.push( 'JavaScript' );
someTags.push( 'Programming' );
someTags.push( 'Web' );
someTags.push( 'Web' );
console.log( 'Total Items:', someTags.length );

/* The `Set` object stores unique values of any type,
   whether primitive values or object references. */

let tags = new Set();
tags.add( 'JavaScript' ); //We use the add() method to add elements to a set
tags.add( 'Programming' );
tags.add( { version: '2015' } );
tags.add( 'Web' );
tags.add( 'Web' ); //Duplicate entries are ignored

console.log('Total Items-->', tags.size );

//Set objects are iterable and destructurable

for ( let tag of tags ) {
  console.log(tag);
}

let [aaa, bbb, ccc, ddd] = tags;
console.log(aaa, bbb, ccc, ddd);

// WEAKSETS : only allow objects

let weakTags = new WeakSet();
//weakTags.add( 'JavaScript' ); // will cause Typerror
weakTags.add( { name: 'JavaScript' } );
weakTags.add( { name: 'ES2015'} );
let iOS = { name: 'iOS' };
weakTags.add( iOS );

// has() and delete() methods
 
weakTags.has(iOS); //true
weakTags.delete(iOS); //true
