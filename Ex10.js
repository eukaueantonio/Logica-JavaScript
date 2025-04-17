// 10. Contar Ocorrências de Palavras
// Peça uma frase e retorne a palavra que mais se repete. Use split(), reduce() e um
// objeto como contador.

function contarOcorrencias(frase) {
    const palavras = frase.split(" "); // Dividir a frase em palavras
  
    const contador = palavras.reduce((acc, palavra) => {
      acc[palavra] = (acc[palavra] || 0) + 1; // Contar quantas vezes a palavra aparece
      return acc;
    }, {});
  
    // Encontrar a palavra com mais ocorrências
    let palavraMaisRepetida = "";
    let maxRepeticoes = 0;
  
    for (const palavra in contador) {
      if (contador[palavra] > maxRepeticoes) {
        palavraMaisRepetida = palavra;
        maxRepeticoes = contador[palavra];
      }
    }
  
    return palavraMaisRepetida;
  }
  
  console.log(contarOcorrencias("banana maçã banana laranja maçã maçã"));
  // Resultado: "maçã"
  