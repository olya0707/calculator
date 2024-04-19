const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', e => {
    switch (e.target.innerText) {
      case 'AC':
        display.value = '';
        break;
      case 'C':
        display.value = display.value.slice(0, -1);
        break;
      case '=':
        try {
          display.value = eval(display.value);
          if (isNaN(display.value) || !isFinite(display.value)) {
            throw new Error('Invalid calculation');
          }
        } catch (e) {
          display.value = 'Error!';
        }
        break;
        case 'x²':
          display.value = Math.pow(display.value, 2);
          break;
      case '√':
        display.value = Math.sqrt(display.value, 2);
        break;
      case 'sin':
        display.value = Math.sin(display.value);
        break;
      case 'cos':
        display.value = Math.sqrt(display.value);
        break;

      case 'tan':
        display.value = Math.sqrt(display.value);
        break;
      default:
        if (e.target.innerText === "." && display.value.includes(".")) {
                return;
        }
        if (display.value.length < 10) {
          display.value += e.target.innerText;
        }
    }
  });
});
