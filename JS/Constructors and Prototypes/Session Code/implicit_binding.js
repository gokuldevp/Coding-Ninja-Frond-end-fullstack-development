const student_1 = {
    name: "gokul",
    age: 18,
    rank: function() {
        console.log("Rank is "+ this)
    }
};

console.log(student_1);
student_1.rank();  //implicit binding rule, calling rank object on student object
var rank1 = student_1.rank;
console.log(rank1);
rank1();