const student_1 = {
    name: "gokul",
    age: 18,
    rank: 1
}

function ask(){
    console.log(this, this.name);
}

// Overall, the choice between call() and apply() depends on how the arguments are available or passed to the function.
//  If you have individual arguments or can explicitly list them, call() is more suitable. If you have an array-like 
//  object or variable number of arguments, apply() is more appropriate.

var askcall = ask.call(student_1);   //{name: 'gokul', age: 18, rank: 1} gokul
// askcall();  //TypeError: askcall is not a function
var askapply = ask.apply(student_1);  //{name: 'gokul', age: 18, rank: 1} gokul
// askapply();   //TypeError: askapply is not a function


// The bind() method allows us to partially apply arguments and set the this value for a function, creating a new function 
// that can be invoked independently.
var askbind = ask.bind(student_1); //<blank>
askbind();            //{name: 'gokul', age: 18, rank: 1} gokul
var askbind2 = ask.bind(student_1)();// here we are using () along with bind to call the function {name: 'gokul', age: 18, rank: 1} gokul
