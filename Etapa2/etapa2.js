const filtrarNumerosPares = (arrayDeNumeros) => {
  return arrayDeNumeros.filter(numero => numero % 2 === 0);
};

console.log("Desafio 1 - filtrar números pares ");
console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(filtrarNumerosPares([11, 22, 33, 44, 55, 98, 100]));
console.log(filtrarNumerosPares([1, 3, 5, 7, 9]));
console.log("\n");

const contarFrequenciaPalavras = (frase) => {
  const palavras = frase.toLowerCase().replace(/[.,!?;:]/g, '').split(/\s+/);
  const frequencia = {};

  for (const palavra of palavras) {
    if (palavra) {
      frequencia[palavra] = (frequencia[palavra] || 0) + 1;
    }
  }

  return frequencia;
};

console.log("Desafio 2: Contar Frequência de Palavras");
console.log(contarFrequenciaPalavras("A casa é bonita e a casa é azul."));
console.log(contarFrequenciaPalavras("Este carro é muito legal e muito rapido!"));
console.log(contarFrequenciaPalavras("Hello World! Hello World!"));