# 🔢 Jogo do Número Secreto

Bem-vindo ao **Jogo do Número Secreto**, um projeto simples e divertido feito com **JavaScript puro**, onde o jogador tenta adivinhar um número aleatório entre 1 e 10. Cada tentativa recebe uma dica, e o jogo garante que o número sorteado **não se repita** até que todos sejam utilizados!

---

## 📌 Funcionalidades

- ✅ Geração de número aleatório sem repetição
- 🎯 Dicas se o número é maior ou menor
- 🔄 Botão para reiniciar o jogo
- 🧠 Contador de tentativas com feedback personalizado
- 🧼 Limpeza automática do campo de entrada

---

## 🧠 Lógica do Jogo

- O número secreto é gerado com `Math.random()` e armazenado em uma lista para evitar repetições.
- O jogador insere um número entre 1 e 10.
- O jogo compara o chute com o número secreto e exibe uma dica.
- Ao acertar, o jogo mostra o número de tentativas e permite reiniciar.
- Quando todos os números já foram sorteados, a lista é zerada e o ciclo recomeça.

---

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
