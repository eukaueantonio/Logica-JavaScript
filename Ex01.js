//1. Formatação de CPF
//Crie uma função que recebe um número como string (ex: &#39;12345678901&#39;) e retorna no
//formato de CPF (123.456.789-01) usando slice e concatenação.

function formatarCPF(cpf) {
    // Pega os pedaços com slice
    let parte1 = cpf.slice(0, 3);   // 123
    let parte2 = cpf.slice(3, 6);   // 456
    let parte3 = cpf.slice(6, 9);   // 789
    let parte4 = cpf.slice(9, 11);  // 01
  
    // Junta tudo com os sinais certos
    let cpfFormatado = parte1 + "." + parte2 + "." + parte3 + "-" + parte4;
  
    return cpfFormatado;
  }
  
  // Exemplo de uso
  let cpfOriginal = "12345678901";
  let cpfFormatado = formatarCPF(cpfOriginal);
  
  console.log(cpfFormatado); // Saída: 123.456.789-01
  