"strict";

const buttons = document.querySelectorAll(".buttons");
let input = document.querySelector(".input");
const numbersSaved = [];

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        let value = button.innerHTML;
        if (inputValue *){
            console.log(value)
        }
    });
});

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        let inputValue = (input.value += buttons[i].innerHTML);
        // let inputCurrent = input.includes(typeof "string");
        // console.log(inputCurrent);
        // console.log(inputValue * 1);

        if (inputValue * 1) {
            console.log(inputValue);
        } else {
            if (inputValue.includes("AC") === true) {
                input.value = "";
            }
            if (inputValue.includes("-") === true) {
                let fields = inputValue.split("-");

                input.value = fields[0] - fields[1];
                console.log(fields);
            } else if (inputValue.includes("+") === true) {
                fields.push(inputValue.split("+"));
                console.log(fields);
            }
        }
    });
}

// var input = "john smith~123 Street~Apt 4~New York~NY~12345";

// var fields = input.split("~");

// var name = fields[0];
// var street = fields[1];

// miguel you are trying to transfer a value to a different line and then get that line and multiply it or subtract ect by the new line
