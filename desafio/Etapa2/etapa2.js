console.log("=== ETAPA 2 - JAVASCRIPT ===\n");


function filtrarPares(array) {
    return array.filter(numero => numero % 2 === 0);
}

console.log("1. 🔢 FUNÇÃO FILTRAR NÚMEROS PARES");

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Teste 1 - Array com números positivos:");
console.log("   Array original:", array1);
console.log("   Números pares:", filtrarPares(array1));
console.log("   Esperado: [2, 4, 6, 8, 10]");
console.log(JSON.stringify(filtrarPares(array1)) === JSON.stringify([2, 4, 6, 8, 10]) ? "CORRETO" : "INCORRETO");
console.log();

const array2 = [-3, -2, -1, 0, 1, 2, 3];
console.log("Teste 2 - Array com negativos e zero:");
console.log("   Array original:", array2);
console.log("   Números pares:", filtrarPares(array2));
console.log("   Esperado: [-2, 0, 2]");
console.log(JSON.stringify(filtrarPares(array2)) === JSON.stringify([-2, 0, 2]) ? "CORRETO" : "INCORRETO");
console.log();

const array3 = [];
console.log("Teste 3 - Array vazio:");
console.log("   Array original:", array3);
console.log("   Números pares:", filtrarPares(array3));
console.log("   Esperado: []");
console.log(JSON.stringify(filtrarPares(array3)) === JSON.stringify([]) ? "CORRETO" : "INCORRETO");
console.log();

const array4 = [1, 3, 5, 7, 9];
console.log("Teste 4 - Array sem números pares:");
console.log("   Array original:", array4);
console.log("   Números pares:", filtrarPares(array4));
console.log("   Esperado: []");
console.log(JSON.stringify(filtrarPares(array4)) === JSON.stringify([]) ? "CORRETO" : "INCORRETO");
console.log();
