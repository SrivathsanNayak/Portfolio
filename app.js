const modeToggle = document.getElementById("mode");

modeToggle.addEventListener("click", changeMode);

function changeMode() {
    if (modeToggle.textContent == "light_mode") {
        modeToggle.textContent = "dark_mode";
        document.querySelector(":root").style.setProperty('--base-color-primary','black');
        document.querySelector(":root").style.setProperty('--base-color-secondary','white');
        document.querySelector(":root").style.setProperty('--base-color-tertiary','green');
    } else if (modeToggle.textContent == "dark_mode") {
        modeToggle.textContent = "light_mode";
        document.querySelector(":root").style.setProperty('--base-color-primary','white');
        document.querySelector(":root").style.setProperty('--base-color-secondary','black');
        document.querySelector(":root").style.setProperty('--base-color-tertiary','green');
    }
}