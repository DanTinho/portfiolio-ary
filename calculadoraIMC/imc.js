function perguntarPeso() {

    peso = document.getElementById('input_peso').value;
    altura = document.getElementById('input_altura').value;
    
    let imc = peso / (altura * altura);

    let resposta = window.document.getElementById('valorImc');

    if(imc < 18.5) {
    resposta.innerHTML = "O valor do seu IMC é de <b>" + imc.toFixed(1) + "</b>, então, você é considerado <b>ABAIXO DO PESO</b>.";
    } else if (imc > 18.6 && imc < 24.9) {
    resposta.innerHTML = "O valor do seu IMC é de <b>" + imc.toFixed(1) + "</b>, então, seu peso é considerado <b>NORMAL</b>.";
    } else if (imc > 25 && imc < 29.9) {
    resposta.innerHTML = "O valor do seu IMC é de <b>" + imc.toFixed(1) + "</b>, então, você é considerado <b>ACIMA DO PESO</b>.";
    } else if (imc > 30) {
    resposta.innerHTML = "O valor do seu IMC é de <b>" + imc.toFixed(1) + "</b>, então, você é considerado <b>OBESO</b>.";
    }

}