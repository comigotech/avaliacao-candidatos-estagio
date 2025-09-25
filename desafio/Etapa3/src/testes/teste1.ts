import { Usuario } from '../interfaces/Usuario';
import { filtrarMaioresDeIdade } from '../functions/filtrarMaioresIdade';

export function executarTestesUsuario(): void {
    console.log("=== TESTE 1 - INTERFACE USUÁRIO E FILTRO IDADE ===\n");

    const usuarios: Usuario[] = [
        { nome: "João", idade: 25, email: "joao@email.com" },
        { nome: "Maria", idade: 17, email: "maria@email.com" },
        { nome: "Pedro", idade: 30, email: "pedro@email.com" },
        { nome: "Ana", idade: 16, email: "ana@email.com" },
        { nome: "Carlos", idade: 18, email: "carlos@email.com" }
    ];

    console.log("odos os usuários:", usuarios);
    
    const maiores = filtrarMaioresDeIdade(usuarios);
    console.log("Maiores de idade:", maiores);
    console.log("Quantidade correta?", maiores.length === 3);
    console.log("Todos são maiores?", maiores.every(u => u.idade >= 18));
}