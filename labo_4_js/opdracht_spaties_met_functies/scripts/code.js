const setup = () => {
    zetErSpatiesIn("HALLOIKBENJULIEN")
}
window.addEventListener("load", setup);

const zetErSpatiesIn = (inputText) => {
    inputText.replaceAll(' ', '')

    let resultaat="";

    for (let i = 0; i < inputText.length; i++) {
        resultaat += inputText.charAt(i) + ' '
    }
    console.log(resultaat)
    return resultaat
}