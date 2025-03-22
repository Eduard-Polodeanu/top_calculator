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
const resultsBar = document.querySelector('#results-text');
const btnsContainer = document.querySelector('.btns-container');
btnsContainer.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.className) {
        case 'operand':
            const clickedOperand = target.textContent;
            currentInput += clickedOperand;
            resultsBar.textContent = currentInput;
            break;
        case 'operator':
            const clickedOperator = target.textContent;
            currentInput += clickedOperator;
            resultsBar.textContent = currentInput;
            break;
    }
});

