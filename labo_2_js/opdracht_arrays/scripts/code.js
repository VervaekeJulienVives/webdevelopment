const setup = () => {
    let familieleden = ['Badr', 'Julien', 'Nikita', 'Bob', 'Bartje'];
    console.log(familieleden.length);
    console.log(familieleden[0], familieleden[2], familieleden[4]);
    let naam =window.prompt('Wat is uw naam?', 'geen naam');
    voegNaamToe(familieleden, naam);
    console.log(familieleden.toString())
}

function voegNaamToe(array, naam){
    array.push(naam);
}
window.addEventListener("load", setup);