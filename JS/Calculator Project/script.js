var buttons = document.querySelectorAll('.key'); //getting click buttons
let displayValue = '';

function updatedisplay() {
    //Update display
    document.getElementById("user-input").value = displayValue;
}

function clickButton(){
    // function to handle clicking button
    var input_key = this.textContent;

    switch (input_key) {
        case ("AC"):
            displayValue = "";
            updatedisplay()
            break;
        
        case ("+/-"):
            if (displayValue != ""){
                displayValue += "*(-1)";
                updatedisplay();
            }            
            break;

        case ("%"):
            if (displayValue != ""){
                displayValue += "/100";
                updatedisplay();
            } 
            break;

        case ("="):
            if (displayValue != ""){
                displayValue = eval(displayValue);
                updatedisplay();
            }
            break;

        default:
            if (["+","/","-","*",].includes(this.textContent)){
                if (displayValue != ""){
                    displayValue += this.textContent;
                    updatedisplay();
                } 
            }else {
                displayValue += this.textContent;
                updatedisplay(); 
            }
            break;
    }
}

// function clickKey(event) {
//     var key = event.key;
  
//     if (/[0-9]/.test(key)) {
//       displayValue += key;
//       updateDisplay();
//     } else if (['+', '-', '*', '/'].includes(key)) {
//       displayValue += key;
//       updateDisplay();
//     } else if (key === 'Enter') {
//       if (displayValue !== "") {
//         displayValue = eval(displayValue);
//         updateDisplay();
//       }
//     }
//   }
  
for (var i in buttons) {
buttons[i].addEventListener("click", clickButton);
}
  
document.addEventListener('keydown', clickKey);
