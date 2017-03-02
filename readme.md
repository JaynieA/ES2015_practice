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
