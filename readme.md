#Description

Client-side JavaScript, focused on practical implementation of the most general features of ES2015.

* variable and function declarations
* Data Structures
* Promises and Generators

# Variable Declarations

## let variables

* Benefits:
  * Using `let` instead of `var` prevents variable declarations from being moved to the top of the scope on what is known as hoisting.
  * With `let`, there's no sharing in `for` loops. A new variable is created on each iteration.
  * Variables declared with `let` can be redefined, but cannot be redeclared within the same scope.
