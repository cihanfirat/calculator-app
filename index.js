//FUNCTIONS  

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input; /* take value from buttons and display value on screen*/
}

function clearDisplay(){
    display.value = ""; /* Clear the screen*/
}

function calculate(){
    try{ /* try below code if there is a problem (like invalid input combination 7+=) */
        display.value = eval(display.value); /* The eval() method evaluates or executes an argument. */
    }
    catch(error){ /*if you got an error print error on the screen */
        display.value = "ERROR";
    }
    
}