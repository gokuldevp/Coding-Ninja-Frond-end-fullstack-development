// ● In Javascript, objects and arrays follow pass by reference.


function f(a, b, c){
    a = 1;
    b.push("New");
    c.first = true;
}

var x = 2;
var y = ["old", "current"];
var z = {last: false, first: false}

console.log("Before: \nx="+ x +",\ny=" + y +",\nz="+z.first);

f(x,y,z);

console.log("\nAfter: \nx="+ x +",\ny=" + y +",\nz="+z.first);