/**
 * 
 * @param {string} msg Mensagem que será exibida 
 * @param {string} classOrID Classe ou ID do elemento no DOM
 * @param {boolean} isTrue Mensagem de Sucesso, ou de Erro?
 */
export default function showMessage(msg, classOrID, isTrue) {
    const el = document.querySelector(classOrID);
    el.innerHTML = msg;

    if (isTrue) {
        el.style.color = 'green';
    } else {
        el.style.color = 'red';
    }
}