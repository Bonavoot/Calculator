let num1 = '';
let num2 = '';
let op = '';

function add(a, b) {
    return parseFloat(a) + parseFloat(b);

}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    return parseFloat(a) / parseFloat(b);
}

function operate(num1, operator, num2) {

    let parsedNum1 = Number(num1);
    let parsedNum2 = Number(num2);
    switch (operator) {
        case '+':
            return add(parsedNum1, parsedNum2);
            break;
        case '-':
            return subtract(parsedNum1, parsedNum2);
            break;
        case '*':
            return multiply(parsedNum1, parsedNum2);
            break;
        case '/':
            return divide(parsedNum1, parsedNum2);
            break;
    }
}

let ops = document.querySelectorAll('.operator')
let digits = document.querySelectorAll('.digit')
let screens = document.querySelector('.screen');
let equals = document.querySelector('.equals');

let getOps = ops.forEach(opers => {
    opers.addEventListener('click', function () {
        if (num1 != '' && !op) {
            op += opers.textContent;
            screens.textContent = opers.textContent
        }

    })
});

let getNums = digits.forEach(digit => {
    digit.addEventListener('click', function () {
        if (!num1 || !op) {

            num1 += parseFloat(digit.textContent);
            screens.textContent = num1;


        }
        else if (num1 != '' && op != '') {
            num2 += parseFloat(digit.textContent);
            screens.textContent = num2;
        }
    })
});

let operation = equals.addEventListener('click', function () {


    return screens.textContent = (`${operate(parseFloat(num1), op, parseFloat(num2))}`);




});
