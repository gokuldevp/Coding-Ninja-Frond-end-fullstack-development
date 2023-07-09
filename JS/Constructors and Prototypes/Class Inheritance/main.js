class Person {
    constructor(name) {
        this.name = name;
    }
 }
  
 var Student = class extends Person {
  
    constructor(name, rollNo, className) {
    super(name)
    this.className = className;
    this.rollNo = rollNo;
    }
  
    getDetails() {
      return [this.name, this.rollNo, this.className];
    }
  }
  
  var Teacher = class extends Person {
    constructor(name, teacherId, subject) {
    super(name)
    this.teacherId = teacherId;
    this.subject = subject;
    }
  
    getDetails() {
      return [this.name, this.teacherId, this.subject];
    }
  }
var teacher = new Teacher("gokul", "TC_1", "biology");
var student = new Student("go", 1, "bio")

console.log(teacher.getDetails());
console.log(student.getDetails());