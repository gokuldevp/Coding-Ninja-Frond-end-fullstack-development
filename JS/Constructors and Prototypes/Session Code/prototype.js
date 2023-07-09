// In JavaScript, the prototype property is used specifically with constructor functions.
//  When you create a constructor function, you can define methods and properties on the 
//  function's prototype, and those methods and properties will be inherited by all instances
//   created from that constructor function.

// The prototype property is not used with regular functions or objects. It is specific to 
// constructor functions and is part of the prototype-based inheritance mechanism in JavaScript.

function Cars(name, model_year, price){
    this.name = name;
    this.model_year = model_year;
    this.price = "$"+price;
    // this.currentPrice = function(){
    //     return "$"+(parseInt(this.price.slice(1))*((2023-this.model_year)/2023))
    // }
}

Cars.prototype.currentPrice = function(){       // Add function for each objects
        return "$"+Math.round(parseInt(this.price.slice(1))*((2023-(2023-this.model_year))/2023)) 
    }

Cars.prototype.color = "Black" // Add same color to all the objects 

car1 = new Cars("Car1", 2022, 20000);
car2 = new Cars("Car2", 2023, 30000);
car2.color = "white";


console.log(car1);
console.log(car1.currentPrice())
console.log(car1.color)
console.log("##################################################")
console.log(car2);
console.log(car2.currentPrice())
console.log(car2.color) // return white as car2 has in car 2, so it won't take blank from prototype

console.log("##################################################\n")
console.log(Cars); 
console.log(Cars.prototype);
console.log(Cars.prototype.constructor);

console.log("##################################################\n")
console.log(car1.__proto__) // dunder proto, not used now as it's deprecated
console.log(car1.__proto__ === Cars.prototype)
console.log("##################################################\n")
console.log(Object.getPrototypeOf(car1)); // console.log(car1.__proto__
console.log(Object.getPrototypeOf(car2));

console.log(Object.getPrototypeOf(car2) === Cars.prototype);