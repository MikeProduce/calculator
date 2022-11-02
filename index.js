"strict";

const buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
    console.log(buttons[i]);
    buttons[i].addEventListener("click", () => {
        console.log(buttons[i].innerHTML);
    });
}
