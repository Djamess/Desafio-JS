function calculaCaracteres() {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const skills = document.getElementById("skills").value;

    
    

    resultNome = `${nome}`
    resultIdade = `${idade}`
    resultSkills = `${skills}`
    document.getElementById("resultadoNome").innerHTML = resultNome;
    document.getElementById("resultadoIdade").innerHTML = resultIdade;
    document.getElementById("resultadoSkills").innerHTML = resultSkills;
}
