// -- ** IMPORTING MODULES ** -- //

// Use the `import` keyword to import modules
import flashMessage from './flash-message';


//Import entire module as object, call functions as properties of the object

import * as flash from './flash-message';
flash.alertMessage('Hello from alert');
flash.logMessage('Hello from logMessage');

//Extracting hard-coded Constants
