var student = {
    "-name": "Naruto",               // key starting with invalid variable name
    age: 37,
    role: "The King",
    2:"Two",                         // key starting with invalid variable name
};

console.log(student.name);           //print undefined
// console.log(student.-name);       //SyntaxError: Unexpected token '-'
console.log(student['-name']);       // Print the name
// console.log(student.2);           //SyntaxError: missing ) after argument list
console.log(student['2']+"\n");           //print 2

// incase of dynamic property we need to also use square bracket notation
function printProperty1 (obj, prop){
    // print undefined since using dot notation
    console.log(obj.prop);
}

function printProperty2 (obj, prop){
    // print undefined since using dot notation
    console.log(obj[prop]);
}

var property = "age"
printProperty1(student, property);  // print undefined
printProperty2(student, property);  // print age