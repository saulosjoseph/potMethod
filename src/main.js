import PotMethod from './calculate';

const myPot = new PotMethod();
let totalInput = document.getElementById("total");
totalInput.oninput = function() {
    myPot.calculate();
}
totalInput.onchange = function() {
    myPot.calculate();
}
totalInput.onpaste = function() {
    myPot.calculate();
}
totalInput.onkeypress = function() {
    myPot.calculate();
}

let basic = document.getElementById("basicDiv");
let basicDisc = document.getElementById("basicDisc");
basic.onmouseenter = function() {
    console.log("teste");    
    basicDisc.style.display = "inline";
}
basic.onmouseout = function() {
    basicDisc.style.display = "none";
}

let resetButton = document.getElementById("reset");
resetButton.onclick = function() {
    myPot.resetPercent();
}