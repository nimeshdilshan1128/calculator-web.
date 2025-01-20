let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            input.value = evaluateExpression(string);
        } else if (buttonText === 'AC') {
            string = "";
            input.value = string;
        } else if (buttonText === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += buttonText;
            input.value = string;
        }
    });
});

function evaluateExpression(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return 'Error';
    }
}
