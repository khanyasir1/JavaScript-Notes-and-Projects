let string = "";
const buttons = document.querySelectorAll("button");
const input = document.querySelector('input');

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = "Error";
            }
        } else if (buttonValue === 'AC') {
            string = "";
            input.value = string;
        } else if (buttonValue === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += buttonValue;
            input.value = string;
        }
    });
});
