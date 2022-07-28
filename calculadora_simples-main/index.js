function coletar() {
    var numero1 = document.querySelector("#numero_1").value
    var numero2 = document.querySelector("#numero_2").value
    var operacao = document.querySelector("#operacao")
    operacao = operacao.options[operacao.selectedIndex].value;

    return resultado(numero1, numero2, operacao)
}
function resultado(numero1, numero2, operacao) {
    []
    numero1 = parseFloat(numero1)
    numero2 = parseFloat(numero2)
    if(isNaN(numero1) || isNaN(numero2)) return alert('Si pá que tu meteu letra ai')
    var res
    switch (operacao) {
        case '+':
            res = numero1 + numero2
            document.querySelector("[id='resultado']").value = res;
            break;
        case '-':
            res = numero1 - numero2
            document.querySelector("[id='resultado']").value = res;
            break;
        case '*':
            res = numero1*numero2
            document.querySelector("[id='resultado']").value = res;
            break;
        case '/':
            res = numero1 / numero2
            document.querySelector("[id='resultado']").value = res;
            break
    }
}