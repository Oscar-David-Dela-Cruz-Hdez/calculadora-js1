function operar(operador) {
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);
    let resultado;

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado = 'ingresa numeros no texto';
    } else {
        switch (operador) {
            case '+':
                resultado = numero1 + numero2;
                break;
            case '-':
                resultado = numero1 - numero2;
                break;
            case '*':
                resultado = numero1 * numero2;
                break;
            case '/':
                if (numero2 === 0) {
                    resultado = 'Error: División por 0';
                } else {
                    resultado = numero1 / numero2;
                }
                break;
            default:
                resultado = 'Error';
        }
    }

    document.getElementById('resultado').value = resultado;
}
