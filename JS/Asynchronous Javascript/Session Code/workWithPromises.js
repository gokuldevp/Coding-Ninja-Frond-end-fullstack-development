let num = 1

let promise_1 = new Promise((resolve,reject) => {
    setTimeout(()=> {
        if (num<5){
            resolve("Process " + num +" is resolved");
        } else {
            reject("Process " + num +" is rejected");
        }
    }, 2000);
});

promise_1.then((data => {
    console.log(data);  //if num < 5, output: Process {num} is resolved
})).catch((error) => {
    console.log(error);  //if num > 5, output: Process {num} is rejected
})
