interface Usuario {
    nome: string;
    email: string;
    idade: number;
}

function maioresDeIdade(usuarios: Usuario[]): Usuario[] {
    const maiores: Usuario[] = [];
    usuarios.forEach(usuario => {
        if (usuario.idade >= 18) {
            maiores.push(usuario);
        }
    });
    return maiores;
}

const usuarios: Usuario[] = [
  { nome: "José", email: "jose@teste.com", idade: 17 },
  { nome: "João", email: "joao@teste.com", idade: 21 },
  { nome: "Maria", email: "maria@teste.com", idade: 19 }
];

console.log("Usuários");
console.log("-".repeat(40));
console.log(usuarios);
console.log("-".repeat(40));
console.log("Usuários maiores de idade");
console.log("-".repeat(40));
console.log(maioresDeIdade(usuarios));