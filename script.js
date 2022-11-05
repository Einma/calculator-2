const NUMBERS = document.querySelectorAll(".number");
const OPERATORS = document.querySelectorAll(".operator");
const POINT = document.querySelector(".point");
const SCREENBTNS = document.querySelectorAll(".screenbtn");
const DISPLAY = document.querySelector(".displayedText");

let isOperator = true;

NUMBERS.forEach(num => num.addEventListener('click', function () {
    DISPLAY.textContent += num.textContent;
    isOperator = false;
}))

OPERATORS.forEach(op => op.addEventListener('click', function () {
    if (op.textContent == "=") {
        DISPLAY.textContent += " " + op.textContent + " " + op;
    }
    else if (isOperator == false) {
        DISPLAY.textContent += op.textContent;
        isOperator = true;
    }
}))

SCREENBTNS.forEach(scbtn => scbtn.addEventListener('click', function () {
    if (scbtn.textContent == 'delete') {
        DISPLAY.textContent = DISPLAY.textContent.slice(0, -1);
    } else {
        DISPLAY.textContent = "";
    }
}))

POINT.addEventListener('click', function () {
    console.log(POINT);
})

