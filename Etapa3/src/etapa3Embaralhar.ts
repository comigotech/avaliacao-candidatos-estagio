function embaralharArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i]!, newArray[j]!] = [newArray[j]!, newArray[i]!];
  }
  return newArray;
}

console.log("Desafio 2 - Embaralhar Array Genérico");

const numeros = [1, 2, 3, 4, 5, 6];
console.log("Array original de números:", numeros);
console.log("Array embaralhado:", embaralharArray(numeros));

const palavras = ["Maçã", "é", "muito", "doce"];
console.log("\nArray original de strings:", palavras);
console.log("Array embaralhado:", embaralharArray(palavras));