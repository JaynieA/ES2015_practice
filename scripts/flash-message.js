// -- ** MODULES ** -- //

//Create module
//The `export` keyword exposes this function to the module system
//The `default` type export is the simplest way to export a function
export default function(message) {
  alert(message);
}

//Named Functions:
function alertMessage(message) {
  alert(message);
}
function logMessage(message) {
  console.log(message);
}

export { alertMessage, logMessage };
