// explaining below process
// Step 1 - Main thread is run
// Step 2 - settimeout is added to the task queue(call back queue).
// Step 3 - promise is added to the micro task queue.
// Step 4 - print 3 from the main thread. 
// Step 5 - since there is items in the main thread, check first the micro task queue. 
// Step 6 - print 2 from the micro task queue (promises)
// Step 7 = print 1 from the task queue (call back - settimeout)

setTimeout(()=>{
    console.log(1);
}, 0);

let promise = new Promise((resolve,reject)=>{
    resolve(2);
});

promise.then(function(data){
    console.log(data);
});

console.log(3);

// output:
// 3
// 2
// 1