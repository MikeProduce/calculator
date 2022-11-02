const buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        console.log(buttons[i].innerHTML);
    });
}
