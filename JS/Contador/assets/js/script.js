var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;
/*
var x = document.getElementById("subtrair");
var y = document.getElementById("adicionar");

x.addEventListener("click", decrement());
y.addEventListener("click", increment());
*/

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }