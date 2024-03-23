const setupColorPicker = () => {
    let sliders = document.querySelectorAll(".slider");
    let saveButton = document.getElementById("btnSubmit");
    let colorSwatch = document.querySelector(".swatch");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", updateColor);
        sliders[i].addEventListener("input", updateColor);
    }

    saveButton.addEventListener("click", saveColor);

    updateColor();
}

const updateColor = () => {
    let sliders = document.querySelectorAll(".slider");
    let valRed = document.getElementById("valRed");
    let valGreen = document.getElementById("valGreen");
    let valBlue = document.getElementById("valBlue");

    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;

    valRed.innerHTML = red;
    valGreen.innerHTML = green;
    valBlue.innerHTML = blue;

    const color = `rgb(${red}, ${green}, ${blue})`;
    let colorSwatch = document.querySelector(".swatch");
    colorSwatch.style.backgroundColor = color;
    colorSwatch.setAttribute("data-rgb", color);
}

const saveColor = () => {
    const savedColorsContainer = document.getElementById("savedColors");
    let colorSwatch = document.querySelector(".swatch");
    const currentColor = colorSwatch.getAttribute("data-rgb");

    const savedColor = document.createElement('div');
    savedColor.classList.add('savedColor');
    savedColor.setAttribute('data-rgb', currentColor);

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.classList.add('btnClose');
    closeButton.innerHTML = '<span>X</span>';
    closeButton.addEventListener('click', function () {
        savedColorsContainer.removeChild(savedColor);
    });

    savedColor.appendChild(closeButton);
    savedColorsContainer.appendChild(savedColor);

    savedColor.style.backgroundColor = currentColor;
}

window.addEventListener("load", setupColorPicker);

