// create student
var student1 = {
    name: "student 1",
    rollNo: 1,
    marks: 80,
} 

var student2 = {
    name: "student 2",
    rollNo: 2,
    marks: 80,
} 

// Function to create a object
function createStudent(name, rollNo, marks){
    let student = {};
    student.name = name;
    student.rollNo = rollNo;
    student.marks = marks;
    return student;
}

var student3 = createStudent("student 3",3, 99);
var student4 = new createStudent("student 4",4, 100);


// all the below 4 return similar output
console.log(student1); //{name: 'student 1', rollNo: 1, marks: 80}
console.log(student2); //{name: 'student 2', rollNo: 2, marks: 80}
console.log(student3); //{name: 'student 3', rollNo: 3, marks: 99}
console.log(student4); //{name: 'student 4', rollNo: 4, marks: 100}
