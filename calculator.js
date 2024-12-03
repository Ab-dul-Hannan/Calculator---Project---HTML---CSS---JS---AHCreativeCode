// Calculator - Project - HTML - CSS - JS - AHCreativeCode

// This function appends each button value by the parameter/arrgument we are passing from the html document
function appendValue(value) {
    const inputDiv = document.getElementById('input');
    // If the input currently contains only "0" because of our initial vlaue
    if (inputDiv.innerHTML === "0") {
        inputDiv.innerHTML = value;
    } else {
        inputDiv.innerHTML += value;
    }
    calculate();
}

// This fucntion clears all input data
function clickAC() {
    document.getElementById('input').innerHTML = "0";
    calculate();
}

// This fucntion is used to delete one elemnet fromt the input data
function clickDE() {
    const inputDiv = document.getElementById('input');
    inputDiv.innerHTML = inputDiv.innerHTML.slice(0, -1);
    calculate();
}

// This funciton calculate the data using built in eval() function of js which convert a string into code
function equal() {
    const inputDiv = document.getElementById('input');
    inputDiv.innerHTML = eval(inputDiv.innerHTML);
}

// This function is important to calculate after every thing we perform so we can show realtime answers in our temp output
function calculate() {
    const inputDiv = document.getElementById('input');
    const tempDiv = document.getElementById('temp');
    tempDiv.innerHTML = inputDiv.innerHTML ? eval(inputDiv.innerHTML) : '0';
}


