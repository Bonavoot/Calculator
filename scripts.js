let num1 = '';
let num2 = '';
let op = '';

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

function operate(num1, operator, num2) {

    switch (operator) {
        case '+':
            add(num1, num2);
            break;

        case '-':
            subtract(num1, num2);
            break;

        case '*':
            multiply(num1, num2);
            break;

        case '/':
            divide(num1, num2);
            break;
    }
}

let ops = document.querySelectorAll('.operator')
let digits = document.querySelectorAll('.digit')
let screens = document.querySelector('.screen');

let getOps = ops.forEach(opers => {
    opers.addEventListener('click', function () {
        screens.textContent = opers.textContent;

    })
});

let getNums = digits.forEach(digit => {
    digit.addEventListener('click', function () {
        screens.textContent = digit.textContent;
    })
})
