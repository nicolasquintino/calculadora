function calcularButton() {
    let opcao = document.querySelector('#operacao').value;
    let num1 = document.getElementById('inp1').value;
    let num2 = document.getElementById('inp2').value;
    resposta = 0

    switch (opcao) {

        case 'Adição': 
        resposta = num1 + num2;
        break;
        
        case 'Subtração': 
        resposta = num1 - num2;
        break;

        case 'Multiplicação': 
        resposta = num1 * num2;
        break;

        case 'Divisão': 
        resposta = num1 / num2;
        break;
    }
document.getElementById('resultado').innerHTML = (resposta);
console.log(resposta);
}