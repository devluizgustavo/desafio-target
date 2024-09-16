import showMessage from "./showMessage.js";

let count = 0;

export default function checkingString() {
    const btn = document.getElementById('str-btn');
    const inpString = document.getElementById('inpstring');

    btn.addEventListener('click', e => {
        const regex = /^[a-zA-Z]+$/
        if (!regex.test(inpString.value)) return showMessage('Por favor, digite uma palavra válida', '#error-string', false);
        if (!containsLetterA(inpString.value)) return showMessage('Não possui a letra A', '#error-string', false);
        return showMessage(`Possui a letra A<br>Quantidade: ${count}`, '#error-string', true);
    })
}

function containsLetterA(string) {
    let valueTemp = string.toLowerCase();

    count = 0;

    for (let i in valueTemp) {
        if (valueTemp[i] == 'a') {
            count++
        }
    }

    return count !== 0 ? true : false;
}