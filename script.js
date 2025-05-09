const display = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value === 'AC') {
            display.value = '';
        } else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else if (value === '←') {
            display.value = display.value.slice(0, -1);
        } else if (value === '+/-') {
            display.value = parseFloat(display.value) * -1;
        }
         else {
            display.value += value;
        }
    });
});
