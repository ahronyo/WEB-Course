let currentInput = '';
let currentOperator = '';
let previousInput = '';
let memoryValue = 0;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function operate(operator) {
  if (currentInput !== '') {
    if (previousInput !== '') {
      calculate();
    } else {
      previousInput = currentInput;
      currentInput = '';
      currentOperator = operator;
      updateDisplay();
    }
  }
}

function calculate() {
  if (currentInput !== '' && previousInput !== '') {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (currentOperator) {
      case '+':
        currentInput = num1 + num2;
        break;
      case '-':
        currentInput = num1 - num2;
        break;
      case '*':
        currentInput = num1 * num2;
        break;
      case '/':
        currentInput = num1 / num2;
        break;
      case 'x^n':
        currentInput = Math.pow(num1, num2);
        break;
      case 'y^x':
        currentInput = Math.pow(num2, num1);
        break;
    }

    previousInput = '';
    currentOperator = '';
    updateDisplay();
  }
}

function calculatePercentage() {
  if (currentInput !== '') {
    currentInput = parseFloat(currentInput) / 100;
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  currentOperator = '';
  updateDisplay();
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function memory(action) {
  switch (action) {
    case 'M+':
      memoryValue += parseFloat(currentInput);
      break;
    case 'M-':
      memoryValue -= parseFloat(currentInput);
      break;
    case 'MC':
      memoryValue = 0;
      break;
    case 'MR':
      currentInput = memoryValue.toString();
      break;
    case 'MS':
      memoryValue = parseFloat(currentInput);
      break;
    case 'M':
      currentInput = memoryValue.toString();
      break;
  }

  updateDisplay();
}

function squareRoot() {
  if (currentInput !== '') {
    currentInput = Math.sqrt(parseFloat(currentInput));
    updateDisplay();
  }
}

function power() {
  if (currentInput !== '') {
    currentInput = Math.pow(parseFloat(currentInput), 2);
    updateDisplay();
  }
}

function appendPercentage() {
  if (currentInput !== '') {
    currentInput = parseFloat(currentInput) / 100;
    updateDisplay();
  }
}

function changeSign() {
  if (currentInput !== '') {
    currentInput = -parseFloat(currentInput);
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = currentInput !== '' ? currentInput : '0';
}