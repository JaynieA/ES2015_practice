// -- ** Maps ** -- //

 let user1 = { name: 'Sam' };
 let user2 = { name: 'Johnny' };

 let totalReplies = new Map();
 totalReplies.set( user1, 2 ); //set() method used to set values
 totalReplies.set( user2, 52 );

 console.log( totalReplies.get(user1) ); // get() method used to get values
 console.log( totalReplies.get(user2) );

 //MAPS AND FOR..IN LOOPS

 let mapSettings = new Map();

 mapSettings.set( 'user','Jaynie' );
 mapSettings.set( 'topic', 'ES2015' );
 mapSettings.set( 'replies', ['Can\'t wait! So cool!'] );

 for( let [key, value] of mapSettings ) {
  console.log( `${key} = ${value}`);
 } // end for

 //WEAKMAP : only objects can be passed as keys

 let weakMapUser = {};
 let comment = {};

 let weakMapSettings = new WeakMap();
 weakMapSettings.set( user, 'ES2015' );
 weakMapSettings.set( comment, 'hi!' );
 //weakMapSettings.set( 'title', 'ES2015' ); //Invalid

 //All available methods on a WeakMap require access to an object used as a key

 console.log(weakMapSettings.get(user)); //ES2015
 console.log(weakMapSettings.has(user)); //true
 console.log(weakMapSettings.delete(user)); //true
