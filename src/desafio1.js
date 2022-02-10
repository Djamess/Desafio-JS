function calculaAno() {
    var anoAtual = new Date().getFullYear() ;
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var anoNasc = anoAtual - idade.value;
    var linguagem = document.getElementById("linguagem");
    var x;

    x = "Olá " + nome.value + " você nasceu em " + anoNasc + " e sua linguagem é: " + linguagem.value
    document.getElementById("resultado").innerHTML = x;
}