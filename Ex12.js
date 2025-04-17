// 12. Sorteador de Nomes
// Peça uma lista de nomes separados por vírgula e sorteie um aleatoriamente usando
// split() e Math.random().

function sorteadorDeNomes(lista) {
    const nomes = lista.split(", "); // 1. Separa a lista de nomes em um array
    const indiceAleatorio = Math.floor(Math.random() * nomes.length); // 2. Gera um índice aleatório
    return nomes[indiceAleatorio]; // 3. Retorna o nome sorteado
  }
  
  console.log(sorteadorDeNomes("João, Maria, Carlos, Ana")); // Exemplo de sorteio
  