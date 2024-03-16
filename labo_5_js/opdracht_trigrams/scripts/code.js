const instellen = () => {
    const woord = "onoorbaar";
    printTrigrammen(woord);
}

const maakTrigrammen = (woord) => {
    const trigrammen = [];
    for (let i = 0; i < woord.length - 2; i++) {
        trigrammen[i] = woord.substring(i, i + 3);
    }
    return trigrammen;
}

const printTrigrammen = (woord) => {
    const trigrammen = maakTrigrammen(woord);
    for (let i = 0; i < trigrammen.length; i++) {
        console.log(trigrammen[i]);
    }
}

window.addEventListener("load", instellen);
