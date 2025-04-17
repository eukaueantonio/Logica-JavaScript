// 6. Primeira Letra Maiúscula
// Peça uma frase e retorne cada palavra com a primeira letra maiúscula. Use split(),
// map(), toUpperCase() e slice().

function primeiraLetraMaiuscula(frase) {
    return frase
      .split(" ") // 1. Corta a frase em palavras
      .map(palavra => 
        palavra[0].toUpperCase() + palavra.slice(1) // 2. Deixa a 1ª letra maiúscula + resto da palavra
      )
      .join(" "); // 3. Junta tudo de novo com espaço
  }
  
  console.log(primeiraLetraMaiuscula("hoje o dia está lindo"));
  