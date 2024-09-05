function Fibonacci() {
    let numero = parseInt(document.getElementById("numeroInput").value);
    let a = 0;
    let b = 1;
    let prox;
    let resultadoSelector = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultadoSelector.innerHTML = "Número inválido."
        return;
    }

    if (numero == 0) {
        resultadoSelector.innerHTML = "O número faz parte da sequência de Fibonacci."
        return;
    }

    while (b <= numero) {
        if (b == numero) {
            resultadoSelector.innerHTML = "O número faz parte da sequência de Fibonacci."
            return;
        }
        prox = a + b;
        a = b;
        b = prox;
    }

    resultadoSelector.innerHTML = "O número NÃO faz parte da sequência de Fibonacci."
}