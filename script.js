let expression = '';
function display(value) {
    expression += value;
    document.getElementById("scr").value = expression;
}
function cE() {
    expression = expression.slice(0, -1);
    if (expression) {
        document.getElementById("scr").value = expression;
    }
}
function square() {
    let value = eval(expression);
    let result = value * value;
    document.getElementById("scr").value = result;
    expression = result;
}

function reciprocal() {
    let value = eval(expression);
    if (value !== 0) {
        let result = 1 / value;
        document.getElementById("scr").value = result;
        expression = result;
    } else {
        document.getElementById("scr").value = "Error";
    }
}
function sqrt() {
    let value = eval(expression);
    if (value >= 0) {
        let result = Math.sqrt(value);
        document.getElementById("scr").value = result;
        expression = result;
    } else {
        document.getElementById("scr").value = "Error";
    }
}
function changeSign() {
    if (expression !== '') {
        let value = eval(expression);
        value = -value;
        expression = value.toString();
        document.getElementById("scr").value = expression;
    }
}
function calculate() {
    let result = eval(expression);
    document.getElementById("scr").value = result;
    expression = result;
}
function clearScreen() {
    expression = '';
    document.getElementById("scr").value = '';
}

// Keyboard input support
document.addEventListener('keydown', function (event) {
    const key = event.key;
    if (/[\d.+\-*/%]/.test(key)) {
        display(key);
    } else if (key === 'Enter') {
        calculate();
    }
});