// 15. Verificação de Email Simples
// Crie uma função que verifica se um texto contém &quot;@&quot; e &quot;.&quot;, retornando se é um e-mail
// válido ou inválido. Use includes() e indexOf().

function verificarEmail(email) {
    const temArroba = email.includes("@"); // Verifica se tem o "@"
    const temPonto = email.includes(".");  // Verifica se tem o "."
    
    if (temArroba && temPonto) {
      return "Válido";
    } else {
      return "Inválido";
    }
  }
  
  console.log(verificarEmail("usuario@exemplo.com")); // Resultado: "Válido"
  console.log(verificarEmail("usuarioexemplo.com"));  // Resultado: "Inválido"
  