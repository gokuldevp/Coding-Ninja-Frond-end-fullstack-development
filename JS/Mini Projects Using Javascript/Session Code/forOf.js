var arr = ["a", "b", "c", 2]
var json = {
    name: "my name",
    age: 19,
    class: 12
}


for (let i of arr) {
    //for of is not supported by some browser eg: Internet Explorer
    console.log(i);
}

for (let i of Object.entries(json)) {
    console.log(i);
}

for (let [i,j] of Object.entries(json)) {
    console.log(j);
}