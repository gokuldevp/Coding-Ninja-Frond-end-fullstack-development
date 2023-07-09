// In JavaScript, a closure is a combination of a function and the lexical environment within which that function was declared. 
// It allows a function to retain access to variables from its outer (enclosing) scope even after the outer function has finished executing.

function outer() {
    console.log("Outer Function");
    let a = 1;

    function inner(){
        let b = 1;
        console.log("Inner Function", "a: "+a,"b: "+b);
        a++;
        b++;
    }

    return inner;
}

var outer_fun = outer(); // --> a is created in outer scope
outer_fun() //Inner Function a: 1 b: 1   --> a is increased by 1 and b is created in inner scope
outer_fun() //Inner Function a: 2 b: 1   --> a is increase by 1 and b is created in inner scope as inner scope is called here

outer_fun = outer();
outer_fun() //Inner Function a: 2 b: 1