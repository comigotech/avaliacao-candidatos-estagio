function filtraPares(array) {
    const pares = [];
    for (let n of array) {
        if (n % 2 === 0) {
            pares.push(n);
        }
    }
    return pares;
}

function contaPalavras(frase) {
    const palavras = frase.split(" ");
    let count = [];
    for (let palavra of palavras) {
        const freq = palavras.reduce((acumulador, valor) => {
            if (valor === palavra) {
                return acumulador + 1;
            }
            return acumulador;
        }, 0);
        count.push({ [palavra]: freq });
    }
    return count;
}

const array1 = [2, -4, -84, 65, 3, 9];
const array2 = [85, 21, 47, 33, 101];
const array3 = [44, 454, -121, 313, -70, 15];

const frase1 = "Com grandes poderes vem grandes responsabilidades";
const frase2 = "Ohana significa família e família significa nunca abandonar ou esquecer";
const frase3 = "Mantenha os seus amigos por perto e os inimigos ainda mais perto";

// Arrays originais
console.log("Arrays originais");
console.log("-".repeat(40));
console.log(array1);
console.log(array2);
console.log(array3);
console.log("-".repeat(40));

// Exibindo apenas os números pares
console.log("Arrays filtrados (apenas números pares)");
console.log("-".repeat(40));
console.log(filtraPares(array1));
console.log(filtraPares(array2));
console.log(filtraPares(array3));
console.log("-".repeat(40));

// Frase 1
console.log("Frase 1");
console.log("-".repeat(40));
console.log(frase1);
console.log("-".repeat(40));
console.log("Frequência de cada palavra na frase:");
console.log("-".repeat(40));
console.log(contaPalavras(frase1));
console.log("-".repeat(40));

// Frase 2
console.log("Frase 2");
console.log("-".repeat(40));
console.log(frase2);
console.log("-".repeat(40));
console.log("Frequência de cada palavra na frase:");
console.log("-".repeat(40));
console.log(contaPalavras(frase2));
console.log("-".repeat(40));

// Frase 3
console.log("Frase 3");
console.log("-".repeat(40));
console.log(frase3);
console.log("-".repeat(40));
console.log("Frequência de cada palavra na frase:");
console.log("-".repeat(40));
console.log(contaPalavras(frase3));
console.log("-".repeat(40));