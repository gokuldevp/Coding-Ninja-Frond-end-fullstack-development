

console.log(1);

setTimeout(()=>{
    console.log(2);
},10);

setTimeout(()=>{
    console.log(3);
},0);

console.log(4);

// output
// 1
// 3
// 2

// the setTimeout function is called with a callback function that logs 3 to the console. The setTimeout function schedules 
// the callback to be executed after a specified delay, which in this case is 0 milliseconds. However, the delay value of 0 
// does not mean the callback will execute immediately. Instead, it means the callback will be added to the event queue and 
// executed as soon as possible, after all synchronous code has finished executing.
// Note: setTimeout is not a core part of the JavaScript language itself, but rather it is a function provided by web browsers
// and Node.js for handling asynchronous timing operations.