// 11. Formatação de Preço
// Crie uma função que recebe um número e retorna formatado em real (R$), com duas
// casas decimais e vírgula no lugar do ponto. Ex: 10.5 → R$ 10,50. Use toFixed() e
// replace().

function formatarPreco(valor) {
    return "R$ " + valor.toFixed(2).replace(".", ","); // 1. 2 casas decimais e 2. troca o ponto pela vírgula
  }
  
  console.log(formatarPreco(10.5));  // R$ 10,50
  console.log(formatarPreco(1234.99)); // R$ 1234,99
  