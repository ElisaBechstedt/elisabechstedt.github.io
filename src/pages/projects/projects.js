 // When the user clicks on button, the text appears

 function showPopup() {
    var popup = document.getElementById("popup1");
    if (popup.className == "popup") {
        popup.className = "popup show";
    } else {
        popup.className = "popup";
    }
}


// When user clicks "here", the background changes

const colorClasses = ["white-color", "yellow-color", "green-color", "purple-color"];

function changeFontcolor() {
    var fontcolor = document.getElementById("fontcolor-change")
    const colorClassesCircle = [...colorClasses, colorClasses[0]];

    for (let i = 0; i < colorClassesCircle.length; i++) {
        if (fontcolor.classList.contains(colorClassesCircle[i])) {
            fontcolor.classList.replace(colorClassesCircle[i], colorClassesCircle[i + 1])
            return;
        }
    }
}

// When user clicks the arrow, it changes the side

function slide() {
    var container = document.getElementById("slider-container1");
    var end = "end"
    if (container.classList.contains(end)) {
        container.classList.remove(end)
    } else {
        container.classList.add(end)
    }
}

// The user can style the Smiley

function sizeSmiley() {
    var slider = document.getElementById("smiley-slider-size");
    var smiley = document.getElementById("smiley");

    smiley.style.fontSize = slider.value + "px";
}

function colorSmiley() {
    var sliderRed = document.getElementById("smiley-slider-red");
    var sliderGreen = document.getElementById("smiley-slider-green");
    var sliderBlue = document.getElementById("smiley-slider-blue");
    var smiley = document.getElementById("smiley");

    smiley.style.color = "rgb(" + sliderRed.value + "," + sliderGreen.value + "," + sliderBlue.value + ")";
}

function rotateSmiley() {
    var slider = document.getElementById("smiley-slider-rotation");
    var smiley = document.getElementById("smiley");

    smiley.style.transform = "rotate(" + slider.value + "deg)";
}

// When user clicks the button, new buttons appear and disappear

function createButton() {
    var newButton = document.createElement("button");
    newButton.innerHTML = ":)";
    var buttonContainer = document.getElementById("button-container");
    buttonContainer.appendChild(newButton);

    newButton.onclick = () => buttonContainer.removeChild(newButton);
}


// Calculator

class Calculator {
    static clear() {
        var display = document.getElementById("calc-display");
        display.innerHTML = "0";
    }

    static insertValue(val) {
        var display = document.getElementById("calc-display");
        if (display.innerHTML == 0) {
            display.innerHTML = "";
        }
        display.innerHTML = display.innerHTML + val;
    }

    static calculate() {
        var display = document.getElementById("calc-display");
        display.innerHTML = eval(display.innerHTML);
    }
}