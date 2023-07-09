class Mammal{
    constructor(limps, area){
        this.limps = limps;
        this.tail = true;
        this.area = area;
    };

    getLimps(){
        return this.limps;
    };

    getTail(){
        return this.tail;
    };

    getArea(){
        return this.area;
    };

    printDis(){
        console.log("Mammal","area: "+this.area, "limps: "+this.limps, "tail: "+this.tail)
    }
}


var Dog = class extends Mammal{
    constructor(sound, area){
        super(4, area)
        this.sound = sound;
    };

    getSound(){
        return this.sound;
    }

    printDis(){
        super.printDis()
        console.log("Dog","sound: "+this.sound)
    }
}

var dog_1 = new Dog("bark", "Land");
console.log(dog_1);
console.log(dog_1.tail);
console.log(dog_1.sound);
dog_1.printDis();