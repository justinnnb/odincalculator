
let button = document.querySelectorAll('.button');
let displayone = document.getElementById("displayone");
let displaytwo = document.getElementById("displaytwo");
let operatorButton = document.getElementById("operator");
let decimalButton = document.getElementById("decimal");
let solve = document.getElementById("solve");
let clear = document.querySelector("#clear");
let del = document.getElementById("delete");
let hasNumber = /\d/;

document.getElementById("displayone").innerHTML = 0;

decimalButton.addEventListener("click", function () { 
    if (hasNumber.test(displaytwo.innerHTML) === true) { // if there is a 2nd number
        if ( displaytwo.innerHTML.includes(".") === true) { // if yes, then check if there is a decimal
            return                                          // if with decimal, return
        } else {
            displaytwo.innerHTML += ".";                    // if no, add decimal on 2nd number
        }
    } else {                                             // if there is no 2nd number
        if ( displayone.innerHTML.includes(".") === true) { // if yes, then check if there is decimal on 1st number
            return                                          // if with decimal, return
        } else {                                            // if no decimal, add decimal on 1st number
            displayone.innerHTML += ".";
        }}})

for (let i = 0; i < button.length; i++) {
button[i].addEventListener('click', function() {
    let val = this.closest("button").innerHTML;
    if (displayone.innerHTML == 0) {       
    displayone.innerHTML = val;
    } else if (hasNumber.test(displayone.innerHTML) === true && isEmpty(operatorButton) === false) {
        if (displaytwo.innerHTML == 0) {       
            displaytwo.innerHTML = val;
        } else {
            displaytwo.innerHTML += val;
        }
    } else if (displayone.innerHTML != 0 && operatorButton.innerHTML === ""){
        displayone.innerHTML += val;
    } else if (
        operatorButton.innerHTML == "+" || 
        operatorButton.innerHTML == "-" || 
        operatorButton.innerHTML == "*" || 
        operatorButton.innerHTML == "/" ){
        displayone.innerHTML += val;
    }})};

function isEmpty(element) { 
    return element.innerHTML === '';
   } 

clear.addEventListener('click', function() {
    document.getElementById("displayone").innerHTML = "";
    document.getElementById("displaytwo").innerHTML = "";
    operatorButton.innerHTML = "";
});

let operators = document.querySelectorAll(".operators");
let display
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function() {
        let ops = this.closest("button").innerHTML;
        let numberone = displayone.innerHTML;
        let numbertwo = displaytwo.innerHTML;
        if (isEmpty(displaytwo) === true) {
            document.getElementById("operator").innerHTML = ops;
        } else if (operatorButton.innerHTML == "+") {
            numberone = parseFloat(numberone) + parseFloat(numbertwo);
            displayone.innerHTML = numberone;
            displaytwo.innerHTML = "";
        } else if (operatorButton.innerHTML == "-") {
            numberone = parseFloat(numberone) - parseFloat(numbertwo);
            displayone.innerHTML = numberone;
            displaytwo.innerHTML = "";
        } else if (operatorButton.innerHTML == "*") {
            numberone = parseFloat(numberone) * parseFloat(numbertwo);
            displayone.innerHTML = numberone;
            displaytwo.innerHTML = "";
        } else if (operatorButton.innerHTML == "/") {
            numberone = parseFloat(numberone) / parseFloat(numbertwo);
            displayone.innerHTML = numberone;
            displaytwo.innerHTML = "";
        }})};

solve.addEventListener("click", function() {
    let numberone = displayone.innerHTML;
    let numbertwo = displaytwo.innerHTML;
    if (isEmpty(displaytwo) === true) {
        return;
    } else if (operatorButton.innerHTML == "+") {
        numberone = parseFloat(numberone) + parseFloat(numbertwo);
        console.log(numberone);
        displayone.innerHTML = numberone;
        displaytwo.innerHTML = "";
    } else if (operatorButton.innerHTML == "-") {
        numberone = parseFloat(numberone) - parseFloat(numbertwo);
        displayone.innerHTML = numberone;
        displaytwo.innerHTML = "";
    } else if (operatorButton.innerHTML == "*") {
        numberone = parseFloat(numberone) * parseFloat(numbertwo);
        displayone.innerHTML = numberone;
        displaytwo.innerHTML = "";
    } else if (operatorButton.innerHTML == "/") {
        numberone = parseFloat(numberone) / parseFloat(numbertwo);
        displayone.innerHTML = numberone;
        displaytwo.innerHTML = "";
    }})


del.addEventListener("click", function () {
    let deleted;
    if (isEmpty(displaytwo) === false) {
        deleted = displaytwo.innerHTML.slice(0, -1);
        displaytwo.innerHTML = deleted;
    } else {
        deleted = displayone.innerHTML.slice(0, -1);
        displayone.innerHTML = deleted;
    }})
