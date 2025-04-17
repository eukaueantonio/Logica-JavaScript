//3. Contar Palavras com Letra Inicial
//Peça uma frase e uma letra, e retorne quantas palavras começam com essa letra (ex:
//&#39;a&#39;). Use split(), startsWith() e filter().

function contarPalavrasComLetra(frase, letra) {
  // Divide a frase em palavras
  let palavras = frase.split(" ");

  // Filtra só as que começam com a letra (ignorando maiúsculas/minúsculas)
  let palavrasQueComecamComLetra = palavras.filter(palavra =>
    palavra.toLowerCase().startsWith(letra.toLowerCase())
  );

  // Retorna quantas são
  return palavrasQueComecamComLetra.length;
}

// Exemplo de uso:
let frase = "A arara azul atravessou a avenida";
let letra = "a";

let resultado = contarPalavrasComLetra(frase, letra);
console.log(resultado); // Saída: 5
