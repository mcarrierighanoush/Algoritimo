const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;
  
  for (let i = posicaoInicial; i < arrProdutos.length; i++) {
    if (arrProdutos[i].preco < arrProdutos[maisBarato].preco) {
      maisBarato = i
    }
  }
  return maisBarato;
}

module.exports = menorValor;