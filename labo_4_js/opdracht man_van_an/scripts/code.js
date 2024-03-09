const setup = () => {
    const origineletekst = "De man van An geeft geen hand aan ambetante verwanten";
    const gezochtetekst = "an";
    let count = 0;

    for (let i = 0; i < origineletekst.length; i++) {
        if (origineletekst.substring(i, i + gezochtetekst.length).toLowerCase() === gezochtetekst.toLowerCase()) {
            count++;
            i += gezochtetekst.length - 1;
        }
    }

    console.log(`Het aantal keer dat de sequentie "${gezochtetekst}" voorkomt: ${count}`);
}

window.addEventListener("load", setup);
