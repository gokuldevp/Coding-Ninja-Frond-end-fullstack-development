var student = {
    "-name": "Naruto",               
    age: 37,
    role: "The King",
    2:"Two",                         
};

console.log(student); //print all the object data
delete student.role;
console.log(student); //print all the object data, we can see the role is removed
delete student["2"]
console.log(student); //print all the object data, we can see 2 is removed.