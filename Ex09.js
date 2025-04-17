    // 9. Verificar Palíndromo com Funções
    // Crie uma função que verifica se uma palavra é palíndroma usando split(), reverse()
    // e join().

    function verificarPalindromo(palavra) {
        const palavraInvertida = palavra.split("").reverse().join(""); // Inverte a palavra
      
        return palavra === palavraInvertida; // Verifica se é igual
      }
      
      console.log(verificarPalindromo("radar")); // true
      console.log(verificarPalindromo("computador")); // false
      