var count = 1;

function sayHello(){
    console.log("Hello");
}

function sayHelloThere(){
    console.log("Hello There " + count++);
    if (count > 20){
        //to Stop the set Interval, we can use the clear Interval with the instance id of the set interval
        clearInterval(inc_id);
    }
}

setTimeout(sayHello, 100); // runs the function after the given timeout in mill sec
var inc_id = setInterval(sayHelloThere, 100); //runs the function after the given timeout in mill sec in a repected intervals