var colorBtn = document.getElementById("color");
var shapeBtn = document.getElementById("shape");
var outerDiv = document.getElementById("outer");
var innerDiv = document.getElementById("inner");

function changeColor() {
  outerDiv.style.backgroundColor = "green";
}

function changeShape() {
  innerDiv.classList.remove("square");
  innerDiv.classList.add("triangle");
}

colorBtn.addEventListener("click", changeColor);
shapeBtn.addEventListener("click", changeShape);
