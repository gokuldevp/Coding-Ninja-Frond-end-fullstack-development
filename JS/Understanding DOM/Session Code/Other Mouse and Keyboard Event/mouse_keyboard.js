var box = document.getElementById("box");
var searchInput = document.getElementById("search");
var searchPara = document.getElementById("search-key");

function changeColorToGreen() {
    box.style.backgroundColor = "green";
};

function changeColorToBlue() {
    box.style.backgroundColor = "blue";
};

function keyDown(event){
    searchPara.innerText = event.key + " is down."
}
function keyUp(event){
    searchPara.innerText = event.key + " is up."
}

box.addEventListener("mouseover", changeColorToBlue);  // when the mouse is on the object
box.addEventListener("mouseout", changeColorToGreen);  // when the mouse is removed from the object

searchInput.addEventListener("keydown", keyDown);  // When the key is down
searchInput.addEventListener("keyup", keyUp); // when the key is up

