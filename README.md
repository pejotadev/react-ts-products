# Layout Lista de produtos utilizando React e TypeScript

Projeto desenvolvido com o intuito de utilizar a menor quantidade de bibliotecas extras.

# Dependencias

- [React](https://react.dev/)
- [React DOM](https://www.npmjs.com/package/react-dom)
- [React Router DOM](https://www.npmjs.com/package/react-router-dom)
- [Vite](https://vitejs.dev/)

Para utilizar em modo desenvolvimento use

```bash
$ npm install
$ npm run dev
```

Para executar o docker use

```bash
$ docker build -t react-ts-products .
$ docker run -p 4173:4173 react-ts-products
```

# Foi utilizado a Fake Store API

Para acessar a API clique [AQUI](https://fakestoreapi.com/docs)

# Funcionalidades

- **Listagem de Produtos:** Exiba uma lista de produtos a partir de um arquivo JSON simulando uma API.
- **Detalhes do Produto:** Ao clicar em um produto, exiba os detalhes do mesmo.
- **Filtro e Pesquisa:** Implemente um filtro e uma barra de pesquisa para filtrar os produtos por nome ou categoria.
- **Responsividade:** A aplicação deve ser responsiva para diferentes dispositivos.
- **Adicionar ao Carrinho:** Possibilidade de adicionar produtos a um carrinho de compras, exibindo a quantidade total de itens no carrinho.

Para mais informações leia o DOME.md
