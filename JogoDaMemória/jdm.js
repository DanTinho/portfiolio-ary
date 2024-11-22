const container = document.querySelector(".container");
const botoaReiniciar = document.querySelector("button");
let cartas;
let primeiraCarta = '';
let segundaCarta = '';

botoaReiniciar.addEventListener("click", () => location.reload());

let items = [
  { nome: "patoborracha", imagem: "imagem/patoborracha.png" },
  { nome: "patobranco", imagem: "imagem/patobranco.png" },
  { nome: "patobritto", imagem: "imagem/patobritto.png" },
  { nome: "patofutebol", imagem: "imagem/patofutebol.png" },
  { nome: "patolagoa", imagem: "imagem/patolagoa.png" },
  { nome: "patomusico", imagem: "imagem/patomusico.png" },
  { nome: "patoskate", imagem: "imagem/patoskate.png" },
  { nome: "patoverde", imagem: "imagem/patoverde.png" },
];

function criarCartas() {
  let itemsDuplicados = [...items, ...items];
  let animais = itemsDuplicados.sort(() => Math.random() - 0.5);

  animais.map((animal) => {
    container.innerHTML += `
    <div class="carta" data-carta=${animal.nome}>
    <div class="atras"></div>
    <div class="frente">
      <img src=${animal.imagem} width="180px" height="180px" />
    </div>`;
  });
}
criarCartas();

function virarCarta() {
  cartas = document.querySelectorAll(".carta");

  cartas.forEach((carta) => {
    carta.addEventListener("click", () => {
      if (primeiraCarta == '') {
        carta.classList.add("carta-virada");
        primeiraCarta = carta;
      } else if (segundaCarta == '') {
        carta.classList.add("carta-virada");
        segundaCarta = carta;
        checarCartas(carta);
      }
    });
  });
}
virarCarta();

function checarCartas() {
  const primeiroAnimal = primeiraCarta.getAttribute("data-carta");
  const segundoAnimal = segundaCarta.getAttribute("data-carta");

  if (primeiroAnimal == segundoAnimal) {
    primeiraCarta.classList.add('desabilitar-carta');
    segundaCarta.classList.add('desabilitar-carta');

    primeiraCarta = '';
    segundaCarta = '';

    setTimeout(() => {
        checkarFimDeJogo();
    }, 500);

  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove("carta-virada");
      segundaCarta.classList.remove("carta-virada");

      primeiraCarta = '';
      segundaCarta = '';
    }, 500);
  }
}

function checkarFimDeJogo() {
    const cartasDesabilitadas = document.querySelectorAll('.desabilitar-carta');

    if (cartasDesabilitadas.length === 16) {
        alert(`Parabéns!! Você completou o jogo da memória!!`);
        botoaReiniciar.removeAttribute("hidden");
    }
}