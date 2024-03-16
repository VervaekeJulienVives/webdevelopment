const setup = () => {
    let tekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let tekstUitvoer = vervangDeDoorHet(tekst);
    console.log(tekstUitvoer);
}

const vervangDeDoorHet = (tekst) => {
    let woord = tekst.split(' ');

    for (let i = 0; i < woord.length; i++) {
        if (woord[i].toLowerCase() === 'de') {
            if (woord[i - 1]) {
                woord[i] = 'het' + woord[i].slice(2);
            } else {
                woord[i] = 'Het';
            }
        }
    }
    return woord.join(' ');
}

window.addEventListener("load", setup);