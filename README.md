# B13 A05

## Q&A (Challenge Part)

### 1. What is the difference between var, let, and const?

Var, let, and const are keywords used to declare variables in JavaScript. Var was the older way of declaring variables while `let` and `const` are used as modern approaches.  
Var has _function scope_, which means that it can be accessed from, re-declared and updated from anywhere inside the function it was defined in. This sometimes results in unexpected errors.  
`let` was introduced in ES6 and has _block scope_, i.e. it can be accessed and updated only from the block _{}_ where it was declared in. It cannot be re-declared in the same scope.  
`const` is almost similar to `let`, except that it cannot be updated once a value is assigned. It must always keep the same reference.  
Because of the safer behaviors, `let` and `const` are preferred over `var` in modern JavaScript.

---

### 2. What is the spread operator (...)?

The spread operator (`...`) is a JavaScript feature introduced in ES6 which is used to expand elements of an array, object, or iterable into individual elements. It is commonly used to make copies of arrays or objects, merge them or pass values to a function individually. After an iterable is spreaded, every element of the iterable is spreaded and treated as individual values. This makes it easier to work with the data without modifying the original one.

---

### 3. What is the difference between map(), filter(), and forEach()?

`map()`, `filter()`, and `forEach()` are array methods used to work with array elements.  
_`map()`_: Used to transform each element of an array and return the modified array.  
_`filter()`_: Used to select certain elements of an array based on specified condition, it returns an array containing only the elements fulfilling the condition.  
_`forEach()`_: Loops through each element of an array and performs an action. Unlike map(), forEach() does not return a new array.

---

### 4. What is an arrow function?

Arrow function was introduced in ES6 and it is a shorter and more modern way of writing functions in JavaScript. Instead of the traditional `function` keyword it uses the `=>` syntax. An important feature is that arrow functions do not have their own `this` context, instead they inherit that from the sorrounding scope. This makes them really useful while working with objects, events and callbacks where the correct `this` value needs to be maintained.

---

### 5. What are template literals?

Template literals are a feature in JavaScript through which strings can be created in a more flexible way using backticks (\` \`) instead of single or double quotes. _String interpolation_ is supported which means that variables or expressions can be inserted directly into the string using `${}` syntax. Also, multi-line strings can be created without using any kind of special characters like `\n`. Therefore, the creation process and readablity becomes easy and clear by using template literals.
