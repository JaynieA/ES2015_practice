// -- ** PROMISES ** -- //

//Creating a promise
/* The promise constructor function takes an anomymous
function with 2 callback arguments known as handlers (resolve and reject) */

function getPollResultsFromServer(pollName) {
  //create Promise
  return new Promise(function(resolve, reject) {
    //XMLHTTP Request
    let url = `/result/${pollName}`;
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    //On Load
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        //call resolve when the non-blocking code is done executing
        resolve(JSON.parse(request.response));
        //promise is now moved to fulfilled state
      } else {
        //called when error occurs, is passed a new Error object
        reject(new Error(request.status));
      } // ene else
    }; //end request.onload
    //On Error
    request.onerror = function() {
      reject(new Error('Error Fetching Results'));
    }; // end request.onerror
  }); // end promise
} // end getPollResultsFromServer

getPollResultsFromServer('Sass vs. Less')
 .then(function(results) {
   //The return value from this call becomes the argument `resultsFromOrlando` in the next .then()
   return results.filter((result) => restult.city === 'Orlando' );
 })
 .then(function(resultsFromOrlando) {
  ui.renderSidebar(resultsFromOrlando);
 })
 .catch(function(err) {
  console.log('Error:', err);
}); // end getPollResultsFromServer
