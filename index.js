"strict";

const buttons = document.querySelectorAll(".buttons");
let input = document.querySelector(".input");
const numbersSaved = [];
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        let inputValue = (input.value += buttons[i].innerHTML);
        // let inputCurrent = input.includes(typeof "string");
        // console.log(inputCurrent);
        // console.log(inputValue * 1);

        if (inputValue * 1) {
            console.log(inputValue);
        } else {
            if (input.value.includes("AC") === true) {
                input.value = "";
            }
            if (input.value.includes("-") === true) {
                
            }
        }
    });
}

// miguel you are trying to transfer a value to a different line and then get that line and multiply it or subtract ect by the new line
