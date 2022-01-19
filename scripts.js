let num1 = '';
let num2 = '';
let op = '';

// Calculator functions 
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
    if (parseFloat(b) == 0) {
        return "Whoops!";
    }
    return parseFloat(a) / parseFloat(b);
}

function operate(num1, operator, num2) {

    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}

// Button html selectors
let ops = document.querySelectorAll('.operator')
let digits = document.querySelectorAll('.digit')
let screens = document.querySelector('.screen');
let equals = document.querySelector('.equals');
let clear = document.querySelector('#ac');
let decimal = document.querySelector('.decimal');

// Operator buttons
let getOps = ops.forEach(opers => {
    opers.addEventListener('click', function () {
        if (num1 != '' && !op) {
            op += opers.textContent;
            screens.textContent = opers.textContent
        }
        if (num1 != '' && op != '' && num2 != '') {
            num1 = (`${operate(parseFloat(num1), op, parseFloat(num2))}`);;
            screens.textContent = num1;
            num2 = '';
            op = '';
            op += opers.textContent;
        }
    })
});

// Decimal point 
let decimalPoint = decimal.addEventListener('click', () => {
    if (op == '' && num1.includes('.') == false) {
        num1 += '.';
        screens.textContent += '.';
    }
    else if (op != '' && num2.includes('.') == false) {
        num2 += '.';
        screens.textContent += '.';
    }
})

// Digit buttons
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
        else if (num1 != '' && op != '' && num2 != '') {
            let result = (`${operate(parseFloat(num1), op, parseFloat(num2))}`);
            screens.textContent = (`${operate(parseFloat(num1), op, parseFloat(num2))}`)
            num1 = result;
            num2 = '';
            op = '';
            console.log(result)
        }
    })
});

// Equals button
let operation = equals.addEventListener('click', function () {
    if (num1 != '' && num2 != '' && op != '') {
        return screens.textContent = (`${operate(parseFloat(num1), op, parseFloat(num2))}`);
    }
});

// Clear/AC button
let AC = clear.addEventListener('click', () => {
    num1 = '';
    num2 = '';
    op = '';
    screens.textContent = "0";
});