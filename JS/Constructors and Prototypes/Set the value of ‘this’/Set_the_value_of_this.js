const john = {
    name:  "John",
    greet: function(){
        console.log(  "Hello! My name is " + this.name) ;
    }
}

const CN = {
  name: "Coding Ninjas",
  printName: function(){
        console.log(this) ;
    }
};

var obj1 = CN.printName.bind(john);
obj1();

john.greet.bind(CN)();