interface Usuario {
  nome: string;
  idade: number;
}

const filtrarMaioresDeIdade = (usuarios: Usuario[]): Usuario[] => {
  return usuarios.filter(usuario => usuario.idade >= 18);
};

console.log("Desafio 1 - Filtrar Usuários Maiores de Idade");

const listaDeUsuarios: Usuario[] = [
  { nome: "Fernando", idade: 25 },
  { nome: "Karla", idade: 17 },
  { nome: "Antonio", idade: 18 },
  { nome: "Maria", idade: 45 },
  { nome: "Bruno", idade: 15 },
];

const maiores1 = filtrarMaioresDeIdade(listaDeUsuarios);
console.log("Maiores de idade:", maiores1);

const maiores2 = filtrarMaioresDeIdade([
  { nome: "Garcia", idade: 21 },
  { nome: "João", idade: 16 },
]);
console.log("Maiores de idade:", maiores2);

const maiores3 = filtrarMaioresDeIdade([
  { nome: "Alice", idade: 12 },
  { nome: "Enzo", idade: 10 },
]);
console.log("Maiores de idade:", maiores3);
