// 7. Contador de Dígitos em uma String
// Peça um texto e retorne quantos dígitos numéricos ele contém usando split() e
// filter() com isNaN().

function contarDigitos(texto) {
    const digitos = texto
      .split("") // 1. Corta letra por letra
      .filter(caractere => !isNaN(caractere) && caractere !== " "); // 2. Fica só com números
  
    return digitos.length; // 3. Conta quantos são
  }
  
  console.log(contarDigitos("Meu número é 12345 e tenho 2 cachorros")); // Vai mostrar: 6
  