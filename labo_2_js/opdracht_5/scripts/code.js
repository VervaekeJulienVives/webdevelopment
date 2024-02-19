const setup = () => {
    let buttonWijzig = document.getElementById("wijzig");
    buttonWijzig.addEventListener('click', toonWijzig)
}

function toonWijzig(){
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);