interface Usuario {
    nome: string;
    email: string;
    idade: number;
}

function embaralha<T>(array: T[]): T[] {
    const novoArray: T[] = [...array];

    let indiceAtual = novoArray.length;
    let indiceAleatorio;

    while (indiceAtual !== 0) {
        indiceAleatorio = Math.floor(Math.random() * indiceAtual);
        indiceAtual--;

        [novoArray[indiceAtual], novoArray[indiceAleatorio]] = [novoArray[indiceAleatorio], novoArray[indiceAtual]];
    }
    return novoArray;
}

const numeros = [1, 2, 3, 4];
const nomes = ["Pedro", "Carolina", "Felipe", "Mariana"];
const usuarios: Usuario[] = [
  { nome: "José", email: "jose@teste.com", idade: 17 },
  { nome: "João", email: "joao@teste.com", idade: 21 },
  { nome: "Maria", email: "maria@teste.com", idade: 19 },
  { nome: "Joaquina", email: "joaquina@teste.com", idade: 15 }
];

console.log("Embaralha - Array de números");
console.log("-".repeat(40));
console.log(embaralha<number>(numeros));
console.log("-".repeat(40));
console.log("Embaralha - Array de strings");
console.log("-".repeat(40));
console.log(embaralha<string>(nomes));
console.log("-".repeat(40));
console.log("Embaralha - Array de objetos (usuários)");
console.log("-".repeat(40));
console.log(embaralha<Usuario>(usuarios));

export default usuarios;