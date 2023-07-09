var student = {
    "name": "Naruto",
    age: 37,
    role: "The King"
};

console.log(typeof(student)) //print object since the type is object
console.log(student); //print all the object data
console.log(student.name); //print the student name alone
console.log(student.dob); // print undefined since dob is not in student
student.dob = 1997;
console.log(student.dob); // print the dob of the studnet.