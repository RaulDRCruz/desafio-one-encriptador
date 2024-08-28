function validateText(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function encryptText() {
    let inputText = document.getElementById("inputText").value;
    if (!validateText(inputText)) {
        alert("El texto contiene mayúsculas o caracteres especiales. Por favor, ingrese solo letras minúsculas y espacios.");
        return;
    }
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;
    document.getElementById("outputText").style.display = "block";
    document.getElementById("hidden").style.display = "none";
}

function decryptText() {
    let inputText = document.getElementById("inputText").value;
    if (!validateText(inputText)) {
        alert("El texto contiene mayúsculas o caracteres especiales. Por favor, ingrese solo letras minúsculas y espacios.");
        return;
    }
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
    document.getElementById("outputText").style.display = "block";
    document.getElementById("hidden").style.display = "none";
}

function copyText() {
    let outputText = document.getElementById("outputText").value;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}