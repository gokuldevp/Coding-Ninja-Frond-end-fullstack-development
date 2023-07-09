function Student(name, rollNo, marks){
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
}

var student1 = new Student("student 1",4, 100);
var student2 = new Student("student 2",4, 100);
var student3 = new Student("student 3",4, 100);
var student4 = new Student("student 4",4, 100);

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);

var student = [];

for (let i = 0; i<=10; ++i){
    student[i] = new Student("student "+(i+1),i+1, 100-i);
    console.log(student[i]);
};