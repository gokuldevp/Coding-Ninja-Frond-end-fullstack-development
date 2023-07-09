var student = {
    "-name": "Naruto",               
    age: 37,
    role: "The King",
    2:"Two",
    address: {
        village_name: "Konohagakure",
        rank: 1,
    }               
};

console.log(typeof(student.address)) //print object since the type is object
console.log(student.address); //print all the object address
console.log(student.address.village_name); //print the village name
console.log(student.address["rank"]);//print the village rank