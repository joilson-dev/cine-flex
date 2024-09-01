# Cine Flex
Sistema de compra de ingressos de cinema em React. Veja filmes em cartaz, escolha horários, selecione assentos e finalize a compra. Layout responsivo, focado em mobile. Integração com API para simular um cenário real. Deploy realizado via Vercel.


## 🔧 Tecnologias
As seguintes ferramentas e estruturas foram utilizadas na construção do projeto:

<img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" /> <img height="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /> <img height="50" src="https://www.svgrepo.com/show/306811/styled-components.svg" />

## 🎯 Descrição
Este projeto é um sistema de compra de ingressos de cinema que permite aos usuários visualizar filmes em cartaz, escolher horários e reservar assentos. É uma aplicação web desenvolvida com React e styled-components, utilizando uma API para obter dados sobre filmes, sessões e assentos.

## 🚀 Funcionalidades

1. **Escolha de Filme (/):**
   - Exibe uma lista de filmes em cartaz.
   - Permite ao usuário clicar em um filme para visualizar as sessões disponíveis.

2. **Escolha de Sessão (/sessoes/:idFilme):**
   - Mostra as sessões disponíveis para o filme selecionado.
   - Permite ao usuário escolher uma sessão e visualizar os assentos disponíveis.

3. **Escolha de Assento (/assentos/:idSessao):**
   - Exibe a disponibilidade dos assentos para a sessão escolhida.
   - Permite ao usuário selecionar e reservar assentos.
   - Exige que o usuário informe nome e CPF para concluir a reserva.

4. **Sucesso (/sucesso):**
   - Mostra um resumo do pedido realizado.
   - Permite ao usuário voltar para a tela inicial.


- **Disponível:** Verde, com número visível.
- **Selecionado:** Amarelo com borda rosa, com número visível.
- **Indisponível:** Azul, com número invisível.

## 🚀 Passo a passo para rodar o projeto
Clone o repositório:


```bash
git https://github.com/joilson-dev/cine-flex.git
```

Entre na pasta do projeto:

```bash
cd cine-flex
```
Instale as dependências:

```bash
npm install
```
Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```


## 🚀 Link deploy
<a>cine-flex-snowy.vercel.app</a>