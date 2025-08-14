# 🔢 Jogo do Número Secreto

Este projeto foi desenvolvido como parte dos estudos do curso **"Lógica de Programação" da Alura**, com o objetivo de praticar conceitos fundamentais de JavaScript, manipulação de DOM e lógica condicional.

Durante o aprendizado, realizei modificações e melhorias por conta própria — como a implementação de **níveis adicionais ("levels")** e controle de números já sorteados — para aplicar os conceitos de forma prática e aprofundar meu domínio da linguagem. 🚀

---

## 📌 Funcionalidades

- ✅ Geração de número aleatório sem repetição
- 🎯 Dicas se o número é maior ou menor
- 🔄 Botão para reiniciar o jogo
- 🧠 Contador de tentativas com feedback personalizado
- 🧼 Limpeza automática do campo de entrada
- 🧩 Estrutura preparada para expansão com novos níveis

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
