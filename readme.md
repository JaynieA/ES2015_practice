#Description

Client-side JavaScript, focused on practical implementation of the most general features of ES2015.

* Variable and Function Declarations
* Data Structures
* Promises and Generators

# Variable Declarations

## let variables

* Benefits:
  * Using `let` instead of `var` prevents variable declarations from being moved to the top of the scope on what is known as hoisting.
  * With `let`, there's no sharing in `for` loops. A new variable is created on each iteration.
  * Variables declared with `let` can be redefined, but cannot be redeclared within the same scope.

## const Variables

* Benefits:
  * The `const` keyword creates read-only named constants.
  * Constants cannot be assigned a new value.
  * Constants are block scoped (not hoised to the top of the function).

# Functions

### Function Defaults

 * Default Parameter values help move default values from the function body to the function signature
 * Using named parameters for optional settings makes it easier to understand how a function should be invoked

### Rest Parameter, Spread Op, Arrow Functions

  * Rest Parameters syntax allows us to represent an indefinite number of arguments as an Array. This way, changes to a function signature are less likely to break code.
    * Used in function definitions
  * Spread Operator allows us to split an Array argument into individual elements
    * Used in function invocations
  * Arrow functions:
    * Preserve Scope: arrow functions bind to the scope of where they are defined (lexical binding), not where they are used.

# Objects and Strings

 * Object initializer shorthand: remove duplicate variable names from object properties when those properties have the same name as the variable being assigned to them.
    * This works anywhere a function is returned (not just in function returns).
 * Object destructuring: we can use shorthand to assign properties from objects to local variables with the same name.
 * Template Strings: string literals allowing embedded expressions. This allows for a much better way to do string interpolation, as well as preserves line breaks.
    * Enclosed by back-ticks, and code is wrapped inside dollar sign and curly braces
 * Object.assign copies properties from one or more source objects to a target object specified as the very first argument.
    * In case of duplicate properties on source objects, the value from the last object on the chain always prevails.

# Arrays, Maps, and Sets

### Arrays

  * Array destructuring: used to assign multiple values from an array to local variables.
    * We can combine destructuring with rest parameters to group values into other arrays.
  * `for...of` Loop Statement iterates over property values, and offers a better way to loop over arrays and other iterable objects.
    * the `for...of` statement cannot be used to iterate over properties in plain JavaScript objects out-of-the-box.
    * In order to be able to work with `for...of`, an object needs a special function assigned to the `Symbol.iterator` property. The presence of this property allows us to know whether an object is iterable.
  * `Array.find`: returns the first element in the array that satisfies a provided testing function.

### Maps

  * Maps are a data structure composed of a collection of key/value pairs. They are very useful to store simple data, such as property values.
    * When using objects as maps, it's keys are always turned to strings.
  * The map object is a simple key/value data structure that allows any value to be used either as a key or a value, and objects are not converted to strings.
    * Use maps when keys are unknown until runtime
    * Use maps when all keys are the same type and all values are the same type (Objects when some values are different than others).
    * Maps are iterable, so they can be used in `for...of` loops. Each run of the loop returns a `[key, value]` pair for an entry in the Map.
  * The `Weakmap` is a type of Map where only objects can be passed as keys. Primitive data types (strings, numbers, booleans, etc.) are not allowed.
    * `WeakMap`'s are not iterable.
    * `Weakmap`'s are memory efficient because they don't prevent the garbage collector from collecting objects currently used as keys, but that are no longer referenced anywhere else in the system.

### Sets

  * The `Set` object stores unique values of any type, whether primitive values or object references.
    * The `add()` method adds elements to a set.
    * Set objects are iterable, so we can use them with `for...of` and destructuring.
  * The `WeakSet` is a more memory efficient type of `Set`
    * Only objects are allowed to be stored in `WeakSet`'s
    * `WeakSet`'s cannot be used with `for...of` and they offer no methods for reading values from it.

# Classes and Modules

### Classes

  * Using the new class syntax, we can write better object oriented code
    * The `constructor` method is a special method for creating and initializing an object
    * The class syntax is not introducing a new object model to JavaScript. It's just introducing a different way to do it than the existing prototype-based inheritance.
    * Class Inheritance:
      * We can use class inheritance to reduce code repetition. Child classes (sub classes) inherit and specialize behavior defined in parent classes.
      * The `extends` keyword is used to create a class that inherits methods and properties from another class. The `super` method (which must be called in the first line of the child constructor) runs the constructor function from the parent class.
      * Child classes can invoke methods from their parent classes via the `super` object.

### Modules
  * NOTE: Must be run from an environment which supports ES6 Module syntax.
  * Modules help to avoid polluting the global namespace.
  * Files `flash-message.js` and `app.js` demonstrate module usage.
  * The `export` keyword exposes module functions to the module system.
  * To import modules, we use the `import` keyword, specify a new local variable to hold its content, and use the `from` keyword to tell the JavaScript engine where the module can be found.
  * Modules still need to be imported via a `<script>` tag, but no longer pollute the global namespace.
  * We can also import the entire module (using `*`) as an object and call each function as a property from this object.
  * Extracting hard-coded Constants (`load-profiles.js` and `constants.js`)
    * Redefining hard-coded constants across an application is unnecessary repetition and can lead to bugs
    * Placing constants on their own module allows them to be reused across other modules and hides implementation details (encapsulation).
  * Classes can also be exported from modules using the same syntax as functions.

# Promises, Iterators, and Generators

### Promieses
  * In continuation passing style (CPS), we tell a function how to continue execution by passing callbacks. It can grow into complicated nested code.
  * A promise is a new abstraction that allows us to write async code in an easier way.
  * The promise constructor function takes an anonymous function with 2 callback arguments known as handlers. Handlers either `resolve` or `reject` the promise.
  * Creating a promise automatically sets it to the pending state. Then, it can do 1 of 2 things: become fulfilled or rejected.
    * A promise returns a future value, such as the eventual result of an asynchronous operation.
  * We can use the `then()` method to read results from the Promise once it's resolved. This method takes a function that will only be invoked once the Promise is resolved.
    * We can also chain multiple calls to `then()` - the return value from 1 call is passed as an argument to the next one.
  * The `reject()` handler is called for unsuccessful status codes and and also when the `onerror` event is triggered on our request object. Both move the promise to a rejected state.
    * Once an error occurs, execution moves immediately to the `catch()` function. None of the remaining `then()` functions are invoked.
