function media(){
    var nome = document.getElementById('nome').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    var media = (nota1+nota2)/2;

    document.getElementById("media").value = media.toFixed(2);
}

function limpar(){
    document.getElementById('nome').value=null;
    document.getElementById('nota1').value=null;
    document.getElementById('nota2').value =null;
    document.getElementById("media").value = null;
}

function calcular(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    var soma = num1+num2;
    document.getElementById('soma').value = soma.toFixed(2);
    document.getElementById('subtracao').value = soma.toFixed(2);
    document.getElementById('multiplicacao').value = soma.toFixed(2);
    document.getElementById('divisao').value = soma.toFixed(2);
}