// IIFE stands for Immediately Invoked Function Expression. It is a JavaScript function that is defined and immediately executed.
// It is commonly used to create a new scope, encapsulate variables, and avoid polluting the global namespace.

// the function is defined inside parentheses () and is immediately followed by another pair of parentheses (),
// which invokes the function. The function declaration is enclosed in parentheses to ensure that it is treated
// as an expression rather than a function statement.

// IIFEs are often used to create private variables and functions. By encapsulating code within an IIFE, you can
//  prevent variables and functions from being accessible outside the scope of the IIFE. This helps to avoid naming
//   conflicts and keeps your code modular and organized.

// Here's an example of an IIFE:

(function(){
    console.log("Testing out IIFE!");
})();