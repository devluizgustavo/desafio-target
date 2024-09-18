import showMessage from "./showMessage.js";
/*
int INDICE = 13, SOMA = 0, K = 0; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);
*/


let ind = 10, sum = 0, k = 0;

while (k < ind) {
    k += 1;
    sum += k;
}

export default function resultSum() {
    document.addEventListener('DOMContentLoaded', e => {
        showMessage(`O resultado da soma é ${sum}`, '#res-sum', true);
    })
}