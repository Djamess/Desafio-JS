function calculaMoeda() {
    var valorTroco = document.getElementById("valor").value;
    var result;

    let quantidadeM1r, quantidadeM50c, quantidadeM25c, quantidadeM10c, quantidadeM5c, quantidadeM1c = 0;

    let valorM1r, valorM50c, valorM25c, valorM10c, valorM5c, valorM1c = 0;

    // Calculo das moedas

    quantidadeM1r = Math.floor(Math.floor(valorTroco) / 1);
    valorM1r = quantidadeM1r > 0 ? quantidadeM1r * 1 : 0;

    quantidadeM50c = Math.floor(valorTroco / 0.5);
    valorM50c = quantidadeM50c > 0 ? quantidadeM50c * 0.5 : 0;


    quantidadeM25c = Math.floor(valorTroco / 0.25);
    valorM25c = quantidadeM25c > 0 ? quantidadeM25c * 0.25 : 0;

    quantidadeM10c = Math.floor(valorTroco / 0.10);
    valorM10c = quantidadeM10c > 0 ? quantidadeM10c * 0.10 : 0;

    quantidadeM5c = Math.floor(valorTroco / 0.05);
    valorM5c = quantidadeM5c > 0 ? quantidadeM5c * 0.05 : 0;

    quantidadeM1c = Math.floor(valorTroco / 0.01);
    valorM1c = quantidadeM1c > 0 ? quantidadeM1c * 0.01 : 0;

    result = "A quantidade mínima de cada valor de moeda é de: <br>R$1,00 = " + quantidadeM1r +  "<br>R$0,50 = " + quantidadeM50c + "<br>R$0,25 = " + quantidadeM25c + "<br>R$0,10 = " + quantidadeM10c + "<br>R$0,05 = " + quantidadeM5c + "<br>R$0,01 = " + quantidadeM1c + "!"
    document.getElementById("resultado").innerHTML = result;
}
