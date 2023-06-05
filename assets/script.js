// Obtiene el valor de cualquier botón
function getValue(buttonValue) {
    let key = document.getElementById(buttonValue).innerText;
    let screen = document.getElementById("screen").innerText;
    console.log("hola")
    document.getElementById('screen').innerText = screen + key;
}

//botón cero.
function getZero() {
    let key = "0";
    let screen = document.getElementById("screen").innerText;
    document.getElementById('screen').innerText = screen + key;
}

//decimal.
function addDecimal() {
    let screen = document.getElementById("screen").innerText;
    document.getElementById("screen").innerText = screen + "."
    console.log(screen)
}

//Borrar
function clearScreen() {
    let screen = document.getElementById("screen").innerText = "";
}

//igual
function solve() {
    let screen = document.getElementById("screen").innerText;
    console.log("solve " + screen)
    console.log("solve " + eval(screen))
    document.getElementById("screen").innerText = eval(screen);
    //let screen = document.getElementById("screen").value = eval(screen);
}


