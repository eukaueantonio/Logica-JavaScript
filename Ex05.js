// 5. Limpar Espaços Dobrados
// Crie uma função que remove espaços repetidos de uma frase (ex: &quot;Olá mundo bonito&quot;
// → &quot;Olá mundo bonito&quot;), usando split(), filter() e join().

function removeEspacosRepetidos(frase) {
    // Quebra a frase onde tem espaços
    let palavras = frase.split(" ");
  
    // Remove os pedaços vazios (que são espaços repetidos)
    let palavrasFiltradas = palavras.filter(palavra => palavra !== "");
  
    // Junta as palavras com um espaço só entre elas
    let fraseFinal = palavrasFiltradas.join(" ");
  
    return fraseFinal;
  }
  
  // Exemplo de uso:
  let fraseOriginal = "   Olá   mundo    bonito   ";
  let fraseCorrigida = removeEspacosRepetidos(fraseOriginal);
  
  console.log(fraseCorrigida); // Saída: "Olá mundo bonito"
  