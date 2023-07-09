function Student(id, name, club){
    this.id = id ;
    this.name = name ;
    this.club = club ; 
}

Student.prototype.printDetails = function(){
        console.log(this.id, this.name, this.club);
}

var studentDetails = [
    ["Raj", "Cricket"],
    ["Rohan", "Dance"],
	["Rita", "Basketball"],
    ["Reema", "Music"],
];

for (var i=0; i<=3; i++){
    studentDetails[i][2] = new Student((i+1), studentDetails[i][0], studentDetails[i][1]);
    studentDetails[i][2].printDetails();
};
