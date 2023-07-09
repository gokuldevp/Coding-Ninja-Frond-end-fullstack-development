var student = {
    "-name": "Naruto",               
    age: 37,
    role: "The King",
    2:"Two",                         
};

for(var prop in student){
    console.log(prop + " : " + student[prop]);     // print the keys : Value
}

// other ways to get the keys

var keys1 = Object.keys(student)
var value1 = Object.values(student)

console.log(keys1); //print keys
console.log(value1); //print values

var keys2 = Object.getOwnPropertyNames(student)
console.log(keys2); //print keys