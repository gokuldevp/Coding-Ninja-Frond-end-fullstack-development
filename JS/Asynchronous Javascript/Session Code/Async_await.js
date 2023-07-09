// In JavaScript, the async/await syntax provides a way to work with asynchronous code in a more synchronous manner.
// The async keyword is used to declare an asynchronous function, and the await keyword is used to wait for a promise
// to resolve before continuing the execution.

console.log(1);

//----------------------------------------------------------------------

let promise = new Promise((resolve, reject)=>{
    resolve("Resolved");
})

promise.then(data=>{
    console.log(data);
})

async function asyncTask(){
    return "Resolved";
}

asyncTask().then(data=>console.log(data));

//-----------------------------------------------------------------------

async function abc(){
    const data = getData();
    console.log(data);
}

let getData = () => {
    return Promise.resolve("My Name is gokul");
}

abc()