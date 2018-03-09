var bulb = document.getElementById("bulb");
var on = document.getElementById("on");
var off = document.getElementById("off");


function turnLightOn(){
        bulb.src = "img/bulb-on.jpeg";
}

function turnLightOff() {
        bulb.src = "img/bulb-off.jpeg";
}

on.addEventListener("click", turnLightOn, false);

off.addEventListener("click", turnLightOff, false);

//on window load hide the whole page and have a prompt pop up asking for a password and if the password matches then the content will be displayed.
