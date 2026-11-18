


let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');
let operator = "";
let firstnumber = 0;
let secondnumber = 0;
let answer = 0;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    let value = buttons[i].innerText.trim();

    if (value == "c") {
      display.value = "";
      operator = "";
      firstnumber = 0;
      secondnumber = 0;
      answer = 0;
    }
    else if (value == "+" || value == "-" || value == "*" || value == "/") {
      firstnumber = Number(display.value);
      operator = value;
      display.value = "";
    }
    else if (value == "=") {
      secondnumber = Number(display.value);

      if (operator == "+") {
        answer = firstnumber + secondnumber;
      }
      else if (operator == "-") {
        answer = firstnumber - secondnumber;
      }
      else if (operator == "/") {
        answer = firstnumber / secondnumber; // dot removed
      }
      else if (operator == "*") {
        answer = firstnumber * secondnumber;
      }

      display.value = answer;
    }
    else {
      display.value += value;
    }
  } 
}