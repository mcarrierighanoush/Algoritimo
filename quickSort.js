const listaLivros = require ('./listaLivros');

function encontraMenores(pivo, array) {
    let menores = 0;

    for (let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual]
        if (produtoAtual.preco < pivo.preco) {
            menores++
        }
    }

    trocaLugar(array, array.indexOf(pivo), menores)
    
}
function trocaLugar(array, de, para){
    const elem1 = array[de]
    const elem2 = array[para]

    array [para]= elem1
    array[de] = elem2
}

function divideNoPivo(array, pivo) {
    let indicePivo = Math.floor(array.length / 2);
    let valoresMenores = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] < pivo) {
        [array[i], array[valoresMenores]] = [array[valoresMenores], array[i]];
        valoresMenores++;
      }
    }
  
    // A ordenação das partes menores e maiores será desenvolvida posteriormente
  
    return array;
  }