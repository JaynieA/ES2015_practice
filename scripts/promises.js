// -- ** PROMISES ** -- //

//Creating a promise
/* The promise constructor function takes an anomymous
function with 2 callback arguments known as handlers (resolve and reject) */

function getPollResultsFromServer(pollName) {
  return new Promise(function(resolve, reject) {

    let url = `/result/${pollName}`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        //call resolve when the non-blocking code is done executing
        resolve(JSON.parse(request.response));
        //promise is now moved to fulfilled state
      } // end if
    }; //end request


    //called when error occurs
    reject(someValue);

  });
}
