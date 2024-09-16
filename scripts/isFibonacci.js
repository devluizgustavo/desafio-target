import showMessage from "./showMessage.js";

// Função que verifica se o número digitado forma um quadrado perfeito em qualquer uma das formulas
function checkFibonacci(num) {
    if (num < 0) return false;

    const formulaPositivo = 5 * num * num + 4;
    const formulaNegativo = 5 * num * num - 4;

    return isPerfectSquare(formulaPositivo) || isPerfectSquare(formulaNegativo);
}


// Função que faz a checagem se o número é um quadrado perfeito 
function isPerfectSquare(x) {
    if (x < 0) return false;

    //Calcula raiz quadrada de x
    const getRaiz = Math.sqrt(x);
    return getRaiz === Math.floor(getRaiz);
}

// Evento de clique no botão
export default function isFibonacci() {
    const btn = document.getElementById('btn-fib');
    const valueInput = document.getElementById('inp-fib');

    btn.addEventListener('click', e => {
        e.preventDefault();
        if (!valueInput.value) return showMessage(`Por favor, digite um número válido`, '#error-fib', false);

        if (checkFibonacci(valueInput.value)) 
        return showMessage(`O Número ${valueInput.value} faz parte da sequência`, '#error-fib', true);
        
        return showMessage(`O Número ${valueInput.value} não faz parte da sequência`, '#error-fib', false);
    })
}









