const buttons = document.querySelectorAll(".buttons");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        console.log(buttons[i].value);
    });
}
