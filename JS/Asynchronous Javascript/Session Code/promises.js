// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an 
// asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous 
// methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some
//  point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// Creating a new pending promise
var pendingPromise = new Promise(() => {})
console.log(pendingPromise); // output: Promise {<pending>}

// Creating a new resolve promise
var fulfilledPromise = new Promise((resolve, reject) => {
    resolve("it's been resolved!")
})
console.log(fulfilledPromise); // output: Promise {<fulfilled>: 'it's been resolved!'}

// Creating a new rejecte promise
var rejectPromise = new Promise((resolve, reject) => {
    reject("it's been rejected!")  // UnhandledPromiseRejectionWarning: it's been rejected!
})
console.log(rejectPromise); // Promise {<rejected>: 'it's been rejected!'}