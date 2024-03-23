const addPElement = () => {
    let p = document.createElement("p");
    p.innerText = "text";
    const div = document.querySelector("#myDIV");
    div.appendChild(p);
};

const setup = () => {
    const btnSubmit = document.querySelector("#btnSubmit");
    btnSubmit.addEventListener("click", addPElement);
};

window.addEventListener("load", setup);
