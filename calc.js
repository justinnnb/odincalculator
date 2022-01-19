

const button = document.querySelectorAll('.button');

for (let i = 0; i < button.length; i++) {
button[i].addEventListener('click', function() {
    let val = this.closest("div button").innerHTML;
    document.getElementById("display").value += val;
})
};


const clear = document.querySelector("#clear");
clear.addEventListener('click', function() {
    document.getElementById("display").value = "";
});

let firstnum = document.getElementById("display").value;

/* function getval(currentval) {

} */

const operator = document.querySelectorAll(".operator");

for (let i = 0; i < button.length; i++) {
    operator[i].addEventListener('click', function() {
    currentval = document.getElementById("display").value;
    return currentval;    
    })
    };


/* 

click operator button
determine button ID
Show Button ID on a new input





*/