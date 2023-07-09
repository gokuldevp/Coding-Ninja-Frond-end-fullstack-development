function sayBye(){
    alert("Byeeeeee");
}
function sayByee(){
    alert("Byeeeeeeeee");
}

var button = document.getElementsByTagName("button");


button[0].onclick = function(){
    alert("Hi there, Don't touch me!!!");
}

button[2].addEventListener("click", 
    function(){
        alert("Hello There!");
});

button[3].addEventListener("click",sayBye);
button[3].addEventListener("click",sayByee);