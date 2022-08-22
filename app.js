let num1 = 8;
let num2 = 2;
let sumEl = document.getElementById("sum-el");
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
  let ttlSum = num1 + num2;
  //   takes the content already in id="sum-el" and adds ttlSum to it (Sum: 10)
  sumEl.textContent = "Sum: " + ttlSum;
}

function subtract() {
  let ttlSum = num1 - num2;
  sumEl.textContent = "Sum: " + ttlSum;
}

function divide() {
  let ttlSum = num1 / num2;
  sumEl.textContent = "Sum: " + ttlSum;
}

function multiply() {
  let ttlSum = num1 * num2;
  sumEl.textContent = "Sum: " + ttlSum;
}
// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
