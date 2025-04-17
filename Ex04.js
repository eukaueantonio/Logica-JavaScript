// 4. Gerador de Senhas Aleatórias
// Crie uma função que gera uma senha de 10 caracteres com letras, números e símbolos
// usando Math.random(), charCodeAt() e String.fromCharCode().

function gerarSenha() {
  let senha = "";
  let tamanho = 10;

  // Conjunto de caracteres permitidos
  let letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
  let numeros = "0123456789";
  let simbolos = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let todosCaracteres = letrasMaiusculas + letrasMinusculas + numeros + simbolos;

  for (let i = 0; i < tamanho; i++) {
    // Pega um índice aleatório
    let indice = Math.floor(Math.random() * todosCaracteres.length);

    // Pega o caractere correspondente
    senha += todosCaracteres.charAt(indice);
  }

  return senha;
}

// Exemplo de uso:
let novaSenha = gerarSenha();
console.log(novaSenha); // Exemplo: "aB9@f2$Xq1"
