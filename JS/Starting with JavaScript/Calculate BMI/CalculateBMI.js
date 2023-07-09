// Write your code here:
var bmi,height=1.7,weight=83;

bmi= weight/(height**2)

console.log("Your Body Mass Index is " + bmi + "and");

switch(bmi){
    case bmi <= 18.5:
        console.log("You are Underweight.");
    case bmi >= 18.6 && bmi <= 24.9:
        console.log("You are Healthy.");
    case bmi >= 25 && bmi <= 29.9:
        console.log("You are Overweight.");
   default:
        console.log("You are Obese.");
}

