const filtrarNumerosPares = (arrayDeNumeros) => {
  return arrayDeNumeros.filter(numero => numero % 2 === 0);
};

console.log("Desafio 1 - filtrar números pares ");
console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(filtrarNumerosPares([11, 22, 33, 44, 55, 98, 100]));
console.log(filtrarNumerosPares([1, 3, 5, 7, 9]));
console.log("\n");