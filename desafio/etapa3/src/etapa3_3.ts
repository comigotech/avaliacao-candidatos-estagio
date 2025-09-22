import * as readline from 'readline';

interface Produto {
    marca: string;
    preco: number;
    tipo: string;
}

class Notebook implements Produto {
    marca: string;
    preco: number;
    tipo: string = 'Notebook';

    constructor(nome: string, preco: number) {
        this.marca = nome;
        this.preco = preco;
    }
}

class Teclado implements Produto {
    marca: string;
    preco: number;
    tipo: string = 'Teclado';

    constructor(nome: string, preco: number) {
        this.marca = nome;
        this.preco = preco;
    }
}

class Monitor implements Produto {
    marca: string;
    preco: number;
    tipo: string = 'Monitor';

    constructor(nome: string, preco: number) {
        this.marca = nome;
        this.preco = preco;
    }
}

const produtos: Produto[] = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function adicionarProduto(tipo: string, marca: string, preco: number): void {
    let produto: Produto;
    
    switch (tipo.toLowerCase()) {
        case 'notebook':
            produto = new Notebook(marca, preco);
            break;
        case 'teclado':
            produto = new Teclado(marca, preco);
            break;
        case 'monitor':
            produto = new Monitor(marca, preco);
            break;
        default:
            console.log('Tipo de produto inválido!');
            return;
    }
    
    produtos.push(produto);
    console.log(`\n✅ ${tipo} "${marca}" adicionado com sucesso!`);
}

function listarProdutos(): void {
    if (produtos.length === 0) {
        console.log('\n📦 Nenhum produto cadastrado ainda.');
        return;
    }
    
    console.log('\n📋 PRODUTOS CADASTRADOS:');
    console.log('=' .repeat(50));
    produtos.forEach((produto, index) => {
        console.log(`${index + 1}. ${produto.tipo}: ${produto.marca} - R$ ${produto.preco.toFixed(2)}`);
    });
    console.log('=' .repeat(50));
}

function validarPreco(preco: string): number | null {
    const precoNumerico = parseFloat(preco);
    if (isNaN(precoNumerico) || precoNumerico <= 0) {
        return null;
    }
    return precoNumerico;
}

function exibirMenu(): void {
    console.log('\n🛍️  SISTEMA DE CADASTRO DE PRODUTOS');
    console.log('=' .repeat(40));
    console.log('1. Cadastrar novo produto');
    console.log('2. Visualizar produtos cadastrados');
    console.log('3. Sair');
    console.log('=' .repeat(40));
}

function processarEscolhaMenu(escolha: string): void {
    switch (escolha.trim()) {
        case '1':
            cadastrarProduto();
            break;
        case '2':
            listarProdutos();
            mostrarMenu();
            break;
        case '3':
            console.log('\n👋 Obrigado por usar nosso sistema!');
            rl.close();
            break;
        default:
            console.log('\n❌ Opção inválida! Tente novamente.');
            mostrarMenu();
            break;
    }
}

function cadastrarProduto(): void {
    console.log('\n📝 CADASTRAR NOVO PRODUTO');
    console.log('-' .repeat(30));
    console.log('Tipos disponíveis: Notebook, Teclado, Monitor');
    
    rl.question('Digite o tipo do produto: ', (tipo) => {
        if (!['notebook', 'teclado', 'monitor'].includes(tipo.toLowerCase())) {
            console.log('❌ Tipo inválido! Use: Notebook, Teclado ou Monitor');
            mostrarMenu();
            return;
        }
        
        rl.question('Digite a marca do produto: ', (marca) => {
            if (!marca.trim()) {
                console.log('❌ Marca não pode estar vazia!');
                mostrarMenu();
                return;
            }
            
            rl.question('Digite o preço do produto (R$): ', (precoStr) => {
                const preco = validarPreco(precoStr);
                if (preco === null) {
                    console.log('❌ Preço inválido! Digite um valor numérico positivo.');
                    mostrarMenu();
                    return;
                }
                
                adicionarProduto(tipo, marca.trim(), preco);
                mostrarMenu();
            });
        });
    });
}

function mostrarMenu(): void {
    exibirMenu();
    rl.question('Escolha uma opção: ', processarEscolhaMenu);
}

function iniciarCLI(): void {
    console.log('🚀 Bem-vindo ao Sistema de Cadastro de Produtos!');
    mostrarMenu();
}

iniciarCLI();
