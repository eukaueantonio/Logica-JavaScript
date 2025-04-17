// 13. Filtrar Palavras por Tamanho
// Crie uma função que recebe um array de palavras e retorna apenas as que têm mais de 5
// letras, usando filter().

function filtrarPalavrasPorTamanho(palavras) {
    return palavras.filter(palavra => palavra.length > 5); // 1. Filtra palavras com mais de 5 letras
  }
  
  console.log(filtrarPalavrasPorTamanho(["abacaxi", "sol", "banana", "cachorro", "laranja"])); 
  // Resultado: ["abacaxi", "banana", "cachorro", "laranja"]
  