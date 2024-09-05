 function verificaTexto() {
    let texto = document.getElementById("textoInput");
    let textoSeparado = texto.value.split("");
    let contagem = 0;
    let plural = ""
    let resultadoSelector = document.getElementById("resultado");

    if (textoSeparado.includes("a") || textoSeparado.includes("A")) {
        for (let i = 0; i < textoSeparado.length; i++)
            if (textoSeparado[i] == "a" || textoSeparado[i] == "A") {
                contagem += 1;
                if (contagem == 1) {
                    plural = ".";
                }
                else {
                    plural = "es."
                }
            }
            resultadoSelector.innerHTML = `O texto inclui a letra "A" ${contagem} vez${plural}`
            return;
    }

    resultadoSelector.innerHTML = 'O texto NÃO inclui a letra "A".'
}