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
            console.alert("Operator not defined");
            break;
    }
    return result;
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
            evaluateInput();
            resultsBar.textContent = currentInput;
            break;
        case 'clear':
            currentInput = '';
            resultsBar.textContent = currentInput;
            break;
    }
});

let operator, operand1, operand2;
function evaluateInput() {
    const splitted = splitTerms(currentInput);
    removeConsecOperators(splitted);
    if (splitted.length === 4) {
        operand1 = Number(splitted[0]);
        operator = splitted[1];
        operand2 = Number(splitted[2]);
        let result = operate(operator, operand1, operand2);
        if (splitted[3] === '=') splitted.splice(0, 4, result);
        else splitted.splice(0, 3, result);
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

