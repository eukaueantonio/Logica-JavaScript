// 4. Gerador de Senhas Aleatórias
// Crie uma função que gera uma senha de 10 caracteres com letras, números e símbolos
// usando Math.random(), charCodeAt() e String.fromCharCode().

function gerarSenha() {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&";
    let senha = "";
  
    for (let i = 0; i < 10; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      senha += caracteres.charAt(indice);
    }
  
    return senha;
  }
  
  console.log(gerarSenha());