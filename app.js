let limite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 0;

function gerarNumeroSecreto() {
  return parseInt(Math.random() * limite + 1);
}

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

// Textos iniciais
exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", `Escolha um número entre 1 e ${limite}`);

function verificarChute() {
  let input = document.querySelector("input");
  let chute = parseInt(input.value);
  tentativas++;

  if (chute === numeroSecreto) {
    exibirTextoNaTela("h1", "Acertou!");
    exibirTextoNaTela("p", `Parabéns! Você descobriu o número secreto com ${tentativas} tentativa(s).`);

    setTimeout(() => {
      let resposta = confirm("Deseja aumentar a dificuldade?");
      reiniciarJogo(resposta);
    }, 100); // Pequeno delay para mostrar mensagem antes do confirm
  } else if (chute < numeroSecreto) {
    exibirTextoNaTela("h1", "O número secreto é maior.");
    exibirTextoNaTela("p", "Tente novamente!");
    input.value = "";
  } else {
    exibirTextoNaTela("h1", "O número secreto é menor.");
    exibirTextoNaTela("p", "Tente novamente!");
    input.value = "";
  }
}

function reiniciarJogo(aumentarDificuldade) {
  if (aumentarDificuldade) {
    limite += 10;
  }

  numeroSecreto = gerarNumeroSecreto();
  tentativas = 0;
  document.querySelector("input").value = "";

  exibirTextoNaTela("h1", "Novo Jogo!");
  exibirTextoNaTela("p", `Escolha um número entre 1 e ${limite}`);
}