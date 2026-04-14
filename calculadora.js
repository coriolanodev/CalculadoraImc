function CalcularImc() {
    // Entrada
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    // Processamento
    let valorImc = peso / (altura * altura);
    document.getElementById("resultado").textContent = "IMC: " + valorImc.toFixed(2);

    // Classificação
    let classificacao = "";
    if (valorImc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (valorImc < 25) {
        classificacao = "Peso normal";
    } else if (valorImc < 30) {
        classificacao = "Sobrepeso";
    } else if (valorImc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (valorImc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }
    document.getElementById("classificacao").textContent = classificacao;
}