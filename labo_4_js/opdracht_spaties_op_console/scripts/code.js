const setup = () => {
    const submit = document.getElementById("submit");

    submit.addEventListener("click", showSpatiesConsole)
}

const showSpatiesConsole = () => {
    const input = document.getElementById("input").value;

    let newTxt = "";

    for (let i=0;i<input.length;i++){
        newTxt += input.charAt(i) + " ";
    }
    console.log(newTxt);
}

window.addEventListener("load", setup);
