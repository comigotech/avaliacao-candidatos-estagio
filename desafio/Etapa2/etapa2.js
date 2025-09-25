console.log("=== ETAPA 2 - JAVASCRIPT ===\n");


function filtrarPares(array) {
    return array.filter(numero => numero % 2 === 0);
}

function contarFrequenciaPalavras(frase) {
    if (!frase || frase.trim() === '') {
        return {};
    }
    
    const textoLimpo = frase.replace(/[.,!?;:]/g, '').toLowerCase();
    
    const palavras = textoLimpo.split(/\s+/).filter(palavra => palavra.length > 0);
    
    const frequencia = {};
    
    palavras.forEach(palavra => {
        frequencia[palavra] = (frequencia[palavra] || 0) + 1;
    });
    
    return frequencia;
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

console.log("2. 📊 FUNÇÃO CONTAR FREQUÊNCIA DE PALAVRAS");

const frase1 = "o gato caça o rato";
console.log("Teste 1 - Frase simples:");
console.log("   Frase: '" + frase1 + "'");
console.log("   Frequência:", contarFrequenciaPalavras(frase1));
console.log("   Esperado: { o: 2, gato: 1, caça: 1, rato: 1 }");
const resultado1 = contarFrequenciaPalavras(frase1);
console.log(resultado1['o'] === 2 && resultado1['gato'] === 1 && resultado1['caça'] === 1 && resultado1['rato'] === 1 ? "CORRETO" : "INCORRETO");
console.log();

const frase2 = "Hello world! Hello JavaScript. World of JavaScript.";
console.log("Teste 2 - Frase com pontuação:");
console.log("   Frase: '" + frase2 + "'");
console.log("   Frequência:", contarFrequenciaPalavras(frase2));
console.log("   Esperado: { hello: 2, world: 2, javascript: 2, of: 1 }");
const resultado2 = contarFrequenciaPalavras(frase2);
console.log(resultado2['hello'] === 2 && resultado2['world'] === 2 && resultado2['javascript'] === 2 && resultado2['of'] === 1 ? "CORRETO" : "INCORRETO");
console.log();

const frase3 = "";
console.log("Teste 3 - Frase vazia:");
console.log("   Frase: '" + frase3 + "'");
console.log("   Frequência:", contarFrequenciaPalavras(frase3));
console.log("   Esperado: {}");
console.log(Object.keys(contarFrequenciaPalavras(frase3)).length === 0 ? "CORRETO" : "INCORRETO");
console.log();

const frase4 = "  palavra    outra   palavra  ";
console.log("Teste 4 - Frase com múltiplos espaços:");
console.log("   Frase: '" + frase4 + "'");
console.log("   Frequência:", contarFrequenciaPalavras(frase4));
const resultado4 = contarFrequenciaPalavras(frase4);
console.log("   Esperado: { palavra: 2, outra: 1 }");
console.log(resultado4['palavra'] === 2 && resultado4['outra'] === 1 ? "CORRETO" : "INCORRETO");