// Global variables

const translationResult = document.getElementById("translationResult");

// Functions

const translateWord = () => {
    let translation = "";
    let word = prompt("Digita la palabra a traducir: \n Casa \n Mesa \n Perro \n Gato")
    word = word.toLowerCase();
    switch (word) {
        case "casa":
            translation = "house"
            break;
        case "mesa":
            translation = "table"
            break;
        case "perro":
            translation = "dog"
            break;
        case "gato":
            translation = "cat"
            break;
        default:
            translation = "No se digitaron las palabras válidas."
            break;
    }
    translationResult.innerHTML = word + ": " + translation;
}

// Events

buttonTranslate.onclick = () => {
    translateWord();
}