const display = document.querySelector(".result")
let firstOperation = ''
let secondOperation = ''
let currentOperator = ''
let decimalAdded = false;
let resultCalculate = '';

function appendNumber(number) {
    if (currentOperator === '' && !decimalAdded) {
        firstOperation = firstOperation += number;
        display.innerHTML = firstOperation
    } else {
        secondOperation = secondOperation += number;
        display.innerHTML = secondOperation
    }
}

function setOperator(operator) {
    currentOperator = String(operator);
    display.innerHTML += currentOperator

}

function clearDisplay() {
    firstOperation = '';
    secondOperation = '';
    currentOperator = '';
    display.innerHTML = '0';
}

function calculateResult() {

    if (firstOperation !== null && secondOperation !== null && currentOperator !== null) {
        let result;

        switch (currentOperator) {
            case '+':
                result = firstOperation?.includes('.') ? parseFloat(firstOperation) + parseFloat(secondOperation) : parseInt(firstOperation) + parseInt(secondOperation)
                break;
            case '-':
                result = firstOperation - secondOperation;
                break;
            case '÷':
                result = firstOperation / secondOperation;
                break;
            case 'x':
                result = firstOperation * secondOperation;
                break;
            default:
                return;
        }
        display.innerHTML = result;
        firstOperation = result;
        secondOperation = '';
        currentOperator = '';
    }
}