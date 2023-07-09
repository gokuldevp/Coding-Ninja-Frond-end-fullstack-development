class CreateCars {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getPrice(){
        return this.price;
    }
}

// always use new keyword before using class
var car1 = new CreateCars("Car1", 10000);
var car2 = new CreateCars("Car2", 20000);
console.log(car1);
console.log(car1.getPrice());
console.log(car2.getPrice());

// function expresion is posible in class as well
var Createjeep = class {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getPrice(){
        return this.price;
    }
}

var jeep1 = new Createjeep("Jeep1", 10000);
var jeep2 = new Createjeep("Jeep2", 20000);
console.log(jeep1);
console.log(jeep2);


// we cannot call a class before creating it.
bike1 = new Createbike(); //Uncaught ReferenceError ReferenceError: Cannot access 'Createbike' before initialization
console.log(bike1.getPrice());

class Createbike {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getPrice(){
        return this.price;
    }
}
