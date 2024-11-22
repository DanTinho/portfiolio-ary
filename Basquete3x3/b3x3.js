function CalcularTimes() {

    let numeroDeInscritos = document.getElementById('input_inscritos').value;
    let quantidadeDeTimes = parseInt(númeroDeInscritos / 3);
    let resposta = window.document.getElementById('respostaTimes');
    let sobra = numeroDeInscritos % 3

    if (sobra === 0) {
        resposta.innerHTML = "A quantidade de times formados é " + quantidadeDeTimes + ". E nenhum aluno sobrará.";
        window.document.getElementById('respostaTimes').style.color = 'green';
    } else {
        resposta.innerHTML = "A quantidade de times formados é " + quantidadeDeTimes + ". Sobrarão " + sobra + " alunos.";
        window.document.getElementById('respostaTimes').style.color = 'red';
    }
    
}