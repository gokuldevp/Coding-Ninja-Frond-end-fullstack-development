// In JavaScript, the Object keyword refers to the built-in constructor function for creating objects.
// It is a global object that provides several utility methods and properties for working with objects.

console.log(Object);

var obj1 = new Object(); //ƒ Object()
console.log(obj1); // {}

Object.prototype.color = "green";  // All objects have color green

var obj2 = {}
console.log(obj2.color);