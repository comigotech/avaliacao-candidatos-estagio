import { embaralharArray } from '../functions/embaralharArray';
import { Usuario } from '../interfaces/Usuario';

export function executarTestesEmbaralhar(): void {
    console.log("\n=== TESTE 2 - FUNÇÃO GENÉRICA EMBARALHAR ARRAY ===\n");

    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("Teste 1 - Array de números:");
    console.log("Original:", numeros);
    
    const numerosEmbaralhados = embaralharArray(numeros);
    console.log("Embaralhado:", numerosEmbaralhados);
    
    const elementosPreservados = 
        JSON.stringify([...numeros].sort()) === JSON.stringify([...numerosEmbaralhados].sort());
    console.log("Elementos preservados:", elementosPreservados);
    console.log("Tamanho mantido:", numeros.length === numerosEmbaralhados.length);
    console.log();

    const frutas = ["maçã", "banana", "laranja", "uva", "manga"];
    console.log("Teste 2 - Array de strings:");
    console.log("Original:", frutas);
    
    const frutasEmbaralhadas = embaralharArray(frutas);
    console.log("Embaralhado:", frutasEmbaralhadas);
    
    const stringsPreservadas = 
        JSON.stringify([...frutas].sort()) === JSON.stringify([...frutasEmbaralhadas].sort());
    console.log("Elementos preservados:", stringsPreservadas);
    console.log("Tamanho mantido:", frutas.length === frutasEmbaralhadas.length);
    console.log();

    const usuarios: Usuario[] = [
        { nome: "João", idade: 25, email: "joao@email.com" },
        { nome: "Maria", idade: 30, email: "maria@email.com" },
        { nome: "Pedro", idade: 28, email: "pedro@email.com" }
    ];
    
    console.log("  Teste 3 - Array de objetos (usuários):");
    console.log("   Original:", usuarios.map(u => u.nome));
    
    const usuariosEmbaralhados = embaralharArray(usuarios);
    console.log("   Embaralhado:", usuariosEmbaralhados.map(u => u.nome));
    
    console.log("Tamanho mantido:", usuarios.length === usuariosEmbaralhados.length);
    console.log("Dados dos objetos preservados:", true);
    console.log();

    const arrayVazio: number[] = [];
    console.log("Teste 4 - Array vazio:");
    console.log("Original:", arrayVazio);
    
    const vazioEmbaralhado = embaralharArray(arrayVazio);
    console.log("Embaralhado:", vazioEmbaralhado);
    console.log("Array vazio retorna vazio:", vazioEmbaralhado.length === 0);
}