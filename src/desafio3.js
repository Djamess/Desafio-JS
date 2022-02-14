function calculaCaracteres() {
    const string = document.getElementById("frases").value;

    const palavras = string.split(" ")
    const numPalavras = palavras.filter(e => {
        return e != ''
    })

    let numFrases = string.split(".").length;
    const letras = string;
    const numLetras = letras.replace(" ", "");

    result = `Este parágrafo tem ${numLetras.length} letras, ${numPalavras.length} palavras, ${numFrases} frases`
    document.getElementById("resultado").innerHTML = result;
}
