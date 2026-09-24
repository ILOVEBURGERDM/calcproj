//OPERATION SECTION
const sum = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

//SELECTOR SECTION
let numBut = document.querySelectorAll(".num");
let display = document.querySelector(".display");
let clearBut = document.querySelector("#clear");
let operator = document.querySelectorAll(".operator");
let equalsBut = document.querySelector("#equals");

/*DISPLAY SECTION*/
numBut.forEach((button) => {
  button.addEventListener("click", () => {
    let display = document.querySelector(".display");
    display.textContent += button.textContent;
  });
}); //Number Buttons

operator.forEach((button) => {
  button.addEventListener("click", () => {
    let display = document.querySelector(".display");
    display.textContent += button.textContent;
  });
}); //Operator Buttons

clearBut.addEventListener("click", () => {
  let display = document.querySelector(".display");
  display.textContent = "";
}); //Clear Button

/*OPERATION SECTION*/
function operate(a, b, operator) {
  switch (operator) {
    case "+":
      return sum(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Invalid operator";
  }
}

function calculate() {
  let display = document.querySelector(".display");
  let expression = display.textContent;
  let operatorMatch = expression.match(/[\+\-\*\/]/);
  if (!operatorMatch) {
    display.textContent = "Invalid input";
    return;
  }
  let operator = operatorMatch[0];
  let [a, b] = expression.split(operator).map(Number);
  if (isNaN(a) || isNaN(b)) {
    display.textContent = "Invalid input";
    return;
  }
  let result = operate(a, b, operator);
  display.textContent = result;
}

equalsBut.addEventListener("click", calculate); //Equals Button
