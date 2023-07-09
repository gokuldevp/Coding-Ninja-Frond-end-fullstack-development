"use strict"; // to prevent js to create variable , if we forget to add it and show error message to us

var outer = document.getElementById("outer");
var inner = document.getElementById("inner");

function clickOuter(){
    console.log("Clicked outer!");
}

function clickInner(event){
    console.log("Clicked Inner!");
    event.stopPropagation();  // to only print clicked inner when clicking inner div, ignores outer div
}

outer.addEventListener("click", clickOuter);
inner.addEventListener("click", clickInner);