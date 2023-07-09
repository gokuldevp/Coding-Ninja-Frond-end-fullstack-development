// In JavaScript, a callback is a function that is passed as an argument to another function and is 
// executed at a later point in time. Callbacks are commonly used in asynchronous programming to 
// handle the completion or result of an asynchronous operation.

// Example 1
let greet = (name, callback) => {
    console.log(`Hi ${name}!`)
    callback();
}

let askQuestion = () => {
    console.log("How old are you?\n")
}
greet("Gokul", askQuestion);

// output:
// Hi Gokul!
// How old are you?

// Example 2
let printNumberPattern = (start, end, callback) => {
    for (let i = start; i <= end; i++) {
      if (i % 2 === 0) {
        console.log(i);
        
        }
    setTimeout(callback,2000,i);
  };
}
let printOdd = (i) => {
    if(i % 2 !== 0){
        console.log(i);
    }
}
printNumberPattern(1, 10, printOdd);

// output - there is a delay of 2sec for the odd numbers to apper
// 2
// 4
// 6
// 8
// 10
// 1
// 3
// 5
// 7
// 9



  