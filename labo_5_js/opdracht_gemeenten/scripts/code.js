const instellen = () => {
    const invoer = prompt("Gemeente:");
    if (invoer.toLowerCase() === "stop") {
        toonGemeenten();
    } else {
        voegGemeenteToe(invoer);
        instellen();
    }
}

const gemeenten = [];

const voegGemeenteToe = (gemeente) => {
    gemeenten.push(gemeente);
}

const toonGemeenten = () => {
    const gesorteerdeGemeenten = gemeenten.sort();
    const dropdown = document.getElementById("gemeenten");
    for (let i = 0; i < gesorteerdeGemeenten.length; i++) {
        const optie = document.createElement("option");
        optie.text = gesorteerdeGemeenten[i];
        dropdown.add(optie);
    }
}

window.addEventListener("load", instellen);
