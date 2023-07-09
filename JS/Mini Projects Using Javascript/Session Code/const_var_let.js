//=====================================================var=========================================================//

// var: Before the introduction of let and const in ES6, var was the primary way to declare variables in JavaScript. 
// However, it has some quirks and scoping issues that can lead to unexpected behavior. Variables declared with var 
// are function-scoped or globally-scoped, meaning they are accessible throughout the entire function or the global 
// scope if declared outside of any function. Additionally, var variables are hoisted, which means they are moved to
// the top of their scope during the compilation phase.

function example_var() {
  console.log(x);      //output: undefined
  var x = 10;
  if (true) {
    console.log(x);    // Output: 10
    var x = 20;        // This redeclares the same variable 'x'
    console.log(x);    // Output: 20
  }
  console.log(x);      // Output: 20
}

function for_var(){
    for (var i = 1; i<=5; i++){
        console.log(i); // output: 1,2,3,4,5
        setTimeout(function() {
            console.log(i); // output: 6,6,6,6,6
        }, 1000);
    }
}
//====================================================const========================================================//

// const: Also introduced in ES6, const is used to declare constants, which are variables that cannot be reassigned 
// once defined. Like let, const is block-scoped and not hoisted. When using const, you must assign a value to the 
// variable at the time of declaration, and subsequent attempts to reassign it will result in an error.

function example_const() {
  //console.log(x);    //Uncaught ReferenceError ReferenceError: Cannot access 'x' before initialization
  const x = 30;
  //x=40;              //TypeError: Assignment to constant variable
  //const y;           //SyntaxError: Missing initializer in const declaration
  if (true) {
    //console.log(x);  //Uncaught ReferenceError ReferenceError: Cannot access 'x' before initialization
    const x = 40;      // This declares a new constant 'x' within the block
    console.log(x);    // Output: 40
  }
  console.log(x);      // Output: 30
}

function for_const(){
    for (const i = 1; i<=5; i++){
        console.log(i); // output: 1,2,3,4,5
        setTimeout(function() {
            console.log(i); // output: 1,2,3,4,5
        }, 1000);
    }
}

//====================================================let==========================================================//

// let: Introduced in ES6, let allows you to declare block-scoped variables. Block scope refers to the portion of code 
// within curly braces {} (e.g., loops, conditionals, functions). Variables declared with let are only accessible within
// the block they are defined in, including any nested blocks. Unlike var, let variables are not hoisted, so they are 
// only available after the point of declaration within the block.

function example_let() {
    //console.log(x);   //ReferenceError: Cannot access 'x' before initialization
    let x = 50;
    let y = 100;
    if (true) {
      console.log(x);   //ReferenceError: Cannot access 'x' before initialization
      console.log(y);   // Output: 100;
      let x = 60;       // This declares a new variable 'x' within the block
      console.log(x);   // Output: 60
    }
    console.log(x);     // Output: 50
  }

function for_let(){
    for (let i = 1; i<=5; i++){
        console.log(i); // output: 1,2,3,4,5
        setTimeout(function() {
            console.log(i); // output: 1,2,3,4,5
        }, 1000);
    }
}
  
//===============================================================================================================//

example_var();
example_const();
example_let();

for_var();
for_let();
// for_const();  //Uncaught TypeError TypeError: Assignment to constant variable.