function mostraResultado() {
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    if (isNaN(number1) || isNaN(number2)) {
        alert("Insira um número para continuar")
    } else {
        var resultado = number1 + number2;
        document.getElementById('resultado').innerHTML = resultado;
    }

}
