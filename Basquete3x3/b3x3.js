function calcularEquipes() {

    numeroDeInscritos = document.getElementById('input_inscritos').value;

    let quantidadeDeTimes = parseInt(numeroDeInscritos / 3);
    let resposta = window.document.getElementById('respostaTimes');
    let sobra = numeroDeInscritos % 3

    if (sobra === 0) {
        resposta.innerHTML = "A quantidade de times formados é " + quantidadeDeTimes + ". E nenhum aluno sobrará.";
        window.document.getElementById('respostaTimes').style.color = '#541c74';
        window.document.getElementById('respostaTimes').style.backgroundColor = '#d494fc';
    } else if (sobra === 1) {
        resposta.innerHTML = "A quantidade de times formados é " + quantidadeDeTimes + ". Sobrará " + sobra + " aluno.";
        window.document.getElementById('respostaTimes').style.color = '#fc1404';
        window.document.getElementById('respostaTimes').style.backgroundColor = '#fc747c';
    } else {
        resposta.innerHTML = "A quantidade de times formados é " + quantidadeDeTimes + ". Sobrarão " + sobra + " alunos.";
        window.document.getElementById('respostaTimes').style.color = '#fc1404';
        window.document.getElementById('respostaTimes').style.backgroundColor = '#fc747c';
    }
    
}