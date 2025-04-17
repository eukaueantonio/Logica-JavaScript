//2. Maior Palavra
//Peça uma frase e crie uma função que retorna a maior palavra da frase usando
//split() e reduce().

function maiorPalavra(frase) {
  let palavras = frase.split(" ");

  let maior = palavras.reduce((maiorAtual, palavraAtual) => {
    return palavraAtual.length > maiorAtual.length ? palavraAtual : maiorAtual;
  });

  return maior;
}

// Exemplo de uso:
let frase = "O cachorro correu rapidamente pelo quintal";
let resultado = maiorPalavra(frase);

console.log(resultado); // Saída: "rapidamente"
