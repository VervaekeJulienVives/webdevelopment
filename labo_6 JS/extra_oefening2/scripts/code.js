const setup = () => {
    styleListItems();
    image();
};

const styleListItems = () => {
    const listItems = document.querySelectorAll("li");
    for (let i = 0; i < listItems.length; i++) {
        const item = listItems[i];
        item.classList.add("listitem");
        item.setAttribute("style", "color: red;");
    }
};

const image = () => {
    const img = document.createElement("img");
    img.setAttribute("src", "img/quienta.jpg");
    document.body.appendChild(img);
};

window.addEventListener("load", setup);
