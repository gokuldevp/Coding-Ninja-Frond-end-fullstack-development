var box = document.getElementById("box");
var text = document.getElementById("text");
var count = 0;

function changeText() {
    count++;
    text.innerHTML = "Box Clicked " + count +" times.";
};

box.addEventListener("click", changeText);