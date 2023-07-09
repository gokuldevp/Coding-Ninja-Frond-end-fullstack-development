function Car(name, model, ReleasePrice) {
    /**
     * This is a function for creating a new car object.
     * The object takes 3 inputs:
     * @param {string} name - The name of the car.
     * @param {number} model - The model year of the car.
     * @param {number} ReleasePrice - The ReleasePrice of the car.
     * 
     */
    this.name = name;
    this.model = model;
    this.ReleasePrice = ReleasePrice;
    this.getCurrentReleasePrice = function(){
        let currentYear = 2023;
        return Math.round(this.ReleasePrice * (this.model%2000/currentYear%2000) * 100);
    }
}


var cars = [];

for (let i = 0; i<=10; ++i){
    cars[i] = new Car("Car "+(i+1), 2000+(i+1), (1+i)*10000)
    console.log(cars[i], cars[i].getCurrentReleasePrice());
};