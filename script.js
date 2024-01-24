let screenNumber = 0;
let holdNumber = 0;
let operation = '';

const result = document.querySelector('#result');
result.value = number1;

function digit(number, op) {
    if(op) {
        holdNumber = screenNumber;
    } else {
        screenNumber += number;
    }
    
}

function operation(op) {
    operation = op;
}

console.log(btn_dot);