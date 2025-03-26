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
    if (b === 0) return 'ligma';
    return a / b;
}

function operate(operator, operand1, operand2) {
    let result;
    switch (operator) {
        case '+':
            result = add(operand1, operand2);
            break;
        case '-':
            result = subtract(operand1, operand2);
            break;
        case '×':
            result = multiply(operand1, operand2);
            break;
        case '÷':
            result = divide(operand1, operand2);
            break;
        default:
            alert("Operation not defined");
            break;
    }
    return result;
}

let isCurrentlyFrac = false;
let currentInput = "";
const resultsBar = document.querySelector('#results-text');
const btnsContainer = document.querySelector('.btns-container');
btnsContainer.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.className) {
        case 'operand':
            if (isNewOperation) {
                currentInput = '';
                isNewOperation = false;
            }
            const clickedOperand = target.textContent;
            currentInput += clickedOperand;
            resultsBar.textContent = currentInput;
            break;
        case 'operator':
        case 'operator equal':
            const clickedOperator = target.textContent;
            currentInput += clickedOperator;
            evaluateInput();
            resultsBar.textContent = currentInput;
            isCurrentlyFrac = false;
            break;
        case 'clear-all':
            currentInput = '';
            resultsBar.textContent = currentInput;
            isCurrentlyFrac = false;
            break;
        case 'clear':
            currentInput = currentInput.slice(0, -1);
            resultsBar.textContent = currentInput;
            break;
        case 'fractional':
            if (!isCurrentlyFrac) {
                currentInput += '.';
                resultsBar.textContent = currentInput;
            }
            isCurrentlyFrac = true;
            break;
        case 'plus-minus':
            break;
    }
});

let isNewOperation = false;
let operator, operand1, operand2;
function evaluateInput() {
    const splitted = splitTerms(currentInput);
    removeConsecOperators(splitted);
    if (splitted.length === 4) {
        operand1 = Number(splitted[0]);
        operator = splitted[1];
        operand2 = Number(splitted[2]);
        let result = operate(operator, operand1, operand2);
        if (splitted[3] === '=') {
            splitted.splice(0, 4, result);
            isNewOperation = true;
        }
        else {
            splitted.splice(0, 3, result);
            isNewOperation = false;
        }
    }
    currentInput = splitted.join('');
}

function splitTerms(string) {
    //splits the input string in operators and operands (and filters undefined)
    return string.split(/([=+\-×÷])/u).filter((elem) => elem !== '');
}

function isOperator(char) {
    const operators = ('/([=+\-×÷])/u');
    return operators.includes(char);
}

function removeConsecOperators(charArray) {
    //checks if the input contains two consecutive operators and overwrites the first one with the most recent one
    if (isOperator(charArray[charArray.length - 2]) 
        && isOperator(charArray[charArray.length - 1])) {
            charArray.splice(charArray.length - 2, 1);
        }
}

