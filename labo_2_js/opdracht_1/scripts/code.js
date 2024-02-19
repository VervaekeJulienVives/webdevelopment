const setup = () => {
    window.alert("Dit is een mededeling");
    console.log(window.confirm("Weet u het zeker?"));
    //true/false
    window.prompt("Wat is uw naam", "onbekend");
}
window.addEventListener("load", setup);