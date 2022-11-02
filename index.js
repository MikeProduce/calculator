const buttons = document.getElementsByClassName("button");
const inputs = document.getElementsByClassName("input");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        let inputchanges = inputs.value;
        return (inputchanges = buttons[i].innerHTML);

