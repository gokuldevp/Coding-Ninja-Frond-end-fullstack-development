// Asynchronous Operations: JavaScript is a single-threaded language, which means it can only execute one piece of code at a time.
//  Asynchronous operations, such as making AJAX requests or fetching data from a server, can take time to complete. Callbacks allow
//   us to specify what should happen once the operation is finished, ensuring that other code can continue executing in the meantime.

// Event Handling: JavaScript is often used to handle events, such as button clicks, mouse movements, or keyboard inputs. Callbacks are 
// commonly used to define the actions that should occur when an event is triggered. For example, you can define a callback function to 
// display a message when a button is clicked.

// Modularity and Reusability: Callbacks promote modularity and reusability in code. By passing a callback function as an argument to another
// function, you can define specific behavior that can be reused in different contexts. This allows you to separate concerns and create more
// flexible and maintainable code.

// Higher-Order Functions: Callbacks are essential for implementing higher-order functions in JavaScript. Higher-order functions are functions
// that take other functions as arguments or return functions as results. They enable powerful functional programming patterns, such as map,
// filter, and reduce, which rely on callbacks to specify the transformation or operation to be applied to a collection of data.

// Error Handling: Callbacks can also be used to handle errors that occur during an operation. By passing an error callback as well as a success
// callback, you can define how errors should be handled and provide appropriate feedback to the user.

console.log(1);

let promise = new Promise(function callback(resolve, reject) {
    resolve(2);
})

promise.then(function(data) {
    console.log(data);
})

console.log(3);

// output:
// 1
// 3
// 2