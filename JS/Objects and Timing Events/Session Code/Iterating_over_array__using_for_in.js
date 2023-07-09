// in js Arrays are actually object type

var arr = ["a", "b", "c", "d"];
arr.name = "gokul"  // we can add other keys apart from numbers in array since array is also a object.
arr[10] = 100;

console.log(arr);
console.log(arr.length); //in this case while we check for length only the length of largest numbers intex + 1 is displayed.
console.log(arr[0]); // print first element
console.log(arr["0"]); // print first element

// for loop

for(var ele in arr){
    console.log(arr[ele]);
}