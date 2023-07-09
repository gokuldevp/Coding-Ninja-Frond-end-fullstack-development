// In JavaScript, arrow functions provide a concise syntax for writing function expressions. 
// They were introduced in ECMAScript 6 (ES6) and offer a more compact and intuitive way to 
// define functions compared to traditional function expressions.

// Arrow functions do not have their own this value and cannot be used as constructors with the new keyword

// Here's the basic syntax of an arrow function:

// (parameters) => { 
//     // function body 
//   };

let add = (a,b) => a+b;
let mul = (a,b) => a*b;

console.log(add(7,4), mul(10,7))

  