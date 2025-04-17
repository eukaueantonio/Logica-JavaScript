// 8. Remover Caracteres Especiais
// Crie uma função que recebe um texto e remove todos os caracteres que não são letras
// ou números, usando replace() com regex.

function removerEspeciais(texto) {
    return texto.replace(/[^a-zA-Z0-9]/g, ""); // substitui os especiais por nada
  }
  
  console.log(removerEspeciais("Olá, mundo! Hoje é 17/04/2025 :)"));
  // Resultado: "OlámundoHojeé17042025"
  