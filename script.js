function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, operand1, operand2) {
    switch (operator) {
        case '+':
            add(operand1, operand2);
            break;
        case '-':
            subtract(operand1, operand2);
            break;
        case '×':
            multiply(operand1, operand2);
            break;
        case '÷':
            divide(operand1, operand2);
            break;
        default:
            console.alert("Operator not defined");
            break;
    }
}

let currentInput = "";
const operands = document.querySelectorAll('.operand');
operands.forEach((operand) => {
    operand.addEventListener('click', () => {
        const input = document.querySelector('#results-text');
        const clickedOperand = operand.textContent;
        currentInput += clickedOperand;
        input.textContent = currentInput;
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        const input = document.querySelector('#results-text');
        const clickedOperator = operator.textContent;
        currentInput += clickedOperator;
        input.textContent = currentInput;
    });
});

