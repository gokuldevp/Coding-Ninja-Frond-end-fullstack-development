var id = document.getElementById("demo");
id.style.border= "1px solid green";

var demoClass = document.querySelectorAll(".demo");
for(var i in demoClass){
	demoClass[i].style.border = "1px solid blue";
    if(i==1){
        demoClass[i].innerHTML = "Second Elements of Class";
    }
}

