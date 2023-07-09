// Object
console.log("**********************************Object********************************");
// Shallow copy
console.log("Shallow Copy............................................................");

var gokul ={
    name: "gokul",
    age: 25,
}

var gopika = gokul;

console.log(gokul);   //output: {name: 'gokul', age: 25}
console.log(gopika);  //output: {name: 'gokul', age: 25}

gopika.name = "Gopika";

console.log(gokul);   //output: {name: 'Gopika', age: 25}
console.log(gopika);  //output: {name: 'Gopika', age: 25}

// Hard copy
console.log("Hard Copy...............................................................")

var gokul ={
    name: "gokul",
    age: 25,
}

console.log("Method 1");

var gopika = {...gokul};  // Spread Operator - The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

console.log(gokul);   //output: {name: 'gokul', age: 25}
console.log(gopika);  //output: {name: 'gokul', age: 25}

gopika.name = "Gopika";

console.log(gokul);   //output: {name: 'gokul', age: 25}
console.log(gopika);  //output: {name: 'Gopika', age: 25}

console.log("\nMethod 2");

var sani = Object.assign({}, gokul); //The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.

console.log(gokul);   //output: {name: 'gokul', age: 25}
console.log(sani);  //output: {name: 'gokul', age: 25}

sani.name = "Sanithya";

console.log(gokul);   //output: {name: 'gokul', age: 25}
console.log(sani);  //output: {name: 'Sanithya', age: 25}

console.log("**********************************Array********************************");
// Shallow copy
console.log("Shallow Copy............................................................");

var arr1 = [1,2,3,4,5]

var arr2 = arr1;

console.log(arr1);   //output: [1, 2, 3, 4, 5]
console.log(arr2);  //output: [1, 2, 3, 4, 5]

arr2.push(6);

console.log(arr1);   //output: [1, 2, 3, 4, 5, 6]
console.log(arr2);  //output: [1, 2, 3, 4, 5, 6]

// Hard copy
console.log("Hard Copy...............................................................")

var arr1 = [1,2,3,4,5]

var arr2 = [...arr1];

console.log(arr1);   //output: [1, 2, 3, 4, 5]
console.log(arr2);  //output: [1, 2, 3, 4, 5]

arr2.push(6);

console.log(arr1);   //output: [1, 2, 3, 4, 5]
console.log(arr2);  //output: [1, 2, 3, 4, 5, 6]

console.log("\nMethod 2");

var arr3 = arr1.map(el => el); //Return a new array with the square root of all element values:

console.log(arr1);   //output: [1, 2, 3, 4, 5]
console.log(arr3);  //output: [1, 2, 3, 4, 5]

arr3.push(6);

console.log(arr1);   //output: [1, 2, 3, 4, 5]
console.log(arr3);  //output: [1, 2, 3, 4, 5, 6]

