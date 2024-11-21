function perguntarPeso() {

    peso = prompt("Qual seu peso?");
    altura = prompt("Qual sua altura em metros?");

    let imc = peso / (altura * altura);

    let resposta = window.document.getElementById('valorImc');

    if(imc < 18.5) {
    resposta.innerHTML += "<p>Considerando seu peso de " + peso + "kg e sua altura de " + altura + "m, você está abaixo do peso.<p>";
    } else if (imc > 18.6 && imc < 24.9) {
    resposta.innerHTML += "<p>Considerando seu peso de " + peso + "kg e sua altura de " + altura + "m, você está no peso normal.<p>";
    } else if (imc > 25 && imc < 29.9) {
    resposta.innerHTML += "<p>Considerando seu peso de " + peso + "kg e sua altura de " + altura + "m, você está acima do peso.<p>";
    } else if (imc > 30) {
    resposta.innerHTML += "<p>Considerando seu peso de " + peso + "kg e sua altura de " + altura + "m, você está obeso.<p>";
    }
}